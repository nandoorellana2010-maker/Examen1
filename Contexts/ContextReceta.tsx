import { createContext } from "react";
import { Receta } from "../Models/Receta";

export const ContextReceta = createContext({
    recetaLista: [] as Receta[],
    recetaAgregar: (receta: Receta) => {},
    recetaEliminar: (idReceta: number) =>{}
})

export const ContextRecetaActual = createContext<Receta | null>(null)