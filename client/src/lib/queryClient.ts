import { QueryClient, QueryFunction } from "@tanstack/react-query";
import {
  economicSchoolsData,
  economicModelsData,
  analyticalReportsData,
  economicConceptsData,
  comparisonsData
} from "../data/authentic-economic-data";

// Mappa dati statici per endpoint
const staticData: Record<string, unknown> = {
  "/api/schools": (economicSchoolsData as any[]).map((s, i) => ({ ...s, id: `school-${i}` })),
  "/api/models": (economicModelsData as any[]).map((m, i) => ({
  ...m,
  id: `model-${i}`,
  type: String(m.type).toLowerCase().includes("macro") ? "macro" : "micro"
})),
  "/api/analyticalReports": (analyticalReportsData as any[]).map((r, i) => ({ ...r, id: `report-${i}` })),
  "/api/concepts": (economicConceptsData as any[]).map((c, i) => ({
    ...c,
    id: `concept-${i}`,
    relatedTerms: (c as any).relatedConcepts ?? [],
    examples: null
  })),
  "/api/comparisons": (comparisonsData as any[]).map((c, i) => ({ ...c, id: `comparison-${i}` })),
  "/api/stats": {
    schoolsCount: (economicSchoolsData as any[]).length,
    modelsCount: (economicModelsData as any[]).length,
    analyticalReportsCount: (analyticalReportsData as any[]).length,
    conceptsCount: (economicConceptsData as any[]).length,
    comparisonsCount: (comparisonsData as any[]).length,
    microModelsCount: (economicModelsData as any[]).filter((m) => String(m.type).toLowerCase().includes("micro")).length,
    macroModelsCount: (economicModelsData as any[]).filter((m) => String(m.type).toLowerCase().includes("macro")).length,
  },
};

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });
  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";

export const getQueryFn = (options: { on401: UnauthorizedBehavior }): QueryFunction =>
  async ({ queryKey }) => {
    const key = queryKey[0] as string;

    // Intercetta le chiamate API e restituisce dati statici
    if (key.startsWith("/api/") && staticData[key] !== undefined) {
      return staticData[key];
    }

    const res = await fetch(queryKey.join("/") as string, {
      credentials: "include",
    });

    if (options.on401 === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
