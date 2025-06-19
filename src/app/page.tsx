"use client"; // Directiva para convertirlo en un Componente de Cliente

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Tipado para un cuaderno
interface Notebook {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

// Datos iniciales para los cuadernos
const initialNotebooks: Notebook[] = [
  {
    id: 1,
    title: "Ideas Iniciales",
    description: "Primeras notas y bocetos para proyectos.",
    imageUrl: "https://images.unsplash.com/photo-1544135599-232a29d3c333?q=80&w=2000&auto=format&fit=crop",
    altText: "Persona de pie en una pasarela de arquitectura moderna.",
  },
  {
    id: 2,
    title: "Recetas de Cocina",
    description: "Mis recetas favoritas y por probar.",
    imageUrl: "https://images.unsplash.com/photo-1551776235-dde6d4214209?q=80&w=2070&auto=format&fit=crop",
    altText: "Vista aérea de acantilados verdes junto al mar.",
  },
];


export default function HomePage() {
  // Manejamos los cuadernos con estado para poder agregar más en el futuro
  const [notebooks, setNotebooks] = useState<Notebook[]>(initialNotebooks);
  
  // En el futuro, aquí irá la lógica para manejar la creación de un nuevo cuaderno
  const handleCreateNotebook = () => {
    console.log("Creando nuevo cuaderno...");
    // Aquí agregarías el nuevo cuaderno al estado `notebooks`
  };

  return (
    <div className="flex-1 p-6 md:p-8 space-y-8">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          Mis Cuadernos
        </h1>
        
        {/* El Dialog de Shadcn envuelve el botón y el contenido del modal */}
        <Dialog>
          {/* Este es el botón que abre el modal */}
          <DialogTrigger asChild>
            <Button className="bg-foreground text-background hover:bg-foreground/90">
              Crear Cuaderno
            </Button>
          </DialogTrigger>
          
          {/* Este es el contenido del modal que se mostrará */}
          <DialogContent className="sm:max-w-[425px] bg-background">
            <DialogHeader>
              <DialogTitle className="text-2xl">Crear Nuevo Cuaderno</DialogTitle>
              <DialogDescription>
                Rellena los detalles para crear tu nuevo cuaderno.
              </DialogDescription>
            </DialogHeader>
            
            {/* Formulario dentro del modal */}
            <div className="grid gap-6 py-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="notebook-name">Nombre del Cuaderno *</Label>
                <Input type="text" id="notebook-name" placeholder="Ej: Mis Ideas Brillantes" />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="description">Descripción Breve</Label>
                <Textarea placeholder="Ej: Un lugar para todas mis notas sobre..." id="description" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="cover">Seleccionar Portada</Label>
                <Input id="cover" type="file" className="file:text-foreground"/>
              </div>
            </div>
            
            <DialogFooter>
              {/* El botón DialogClose cierra el modal automáticamente */}
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancelar
                </Button>
              </DialogClose>
              {/* Botón principal para crear el cuaderno */}
              <Button type="submit" onClick={handleCreateNotebook}>
                Crear Cuaderno
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </header>

      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {notebooks.map((notebook) => (
            <a
              key={notebook.id}
              href={`/notebook/${notebook.id}`}
              className="group block rounded-lg overflow-hidden bg-card shadow-lg border transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50"
            >
              <div className="overflow-hidden">
                <Image
                  src={notebook.imageUrl}
                  alt={notebook.altText}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-card-foreground mb-1">
                  {notebook.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {notebook.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}