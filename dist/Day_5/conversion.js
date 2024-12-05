"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
// Función principal
function procesarArchivo(entradaPath, salidaPath) {
    try {
        // Leer el archivo de entrada
        const datos = fs.readFileSync(entradaPath, 'utf-8');
        // Dividir las líneas y transformarlas en el formato deseado
        const lineas = datos.split('\n').filter(linea => linea.trim() !== ''); // Eliminar líneas vacías
        const resultado = lineas.map(linea => `[${linea.trim()}]`).join(',\n') + ',';
        // Escribir el resultado en el archivo de salida
        fs.writeFileSync(salidaPath, resultado, 'utf-8');
        console.log(`Archivo procesado correctamente. Resultado guardado en ${salidaPath}`);
    }
    catch (error) {
        console.error('Error al procesar el archivo:', error);
    }
}
// Rutas de entrada y salida
const entradaPath = 'entrada.txt';
const salidaPath = 'salida.txt';
// Ejecutar la función
procesarArchivo(entradaPath, salidaPath);
