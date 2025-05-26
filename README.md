# APi Store

- Aplicacion creada para el manejo del servico de una tienda miscelanea.

## Prisma

Se usa prisma ORM para crear las tablas y relaciones en la base de datos

```bash
npx prisma init
```

### Comando recomendado (crea migración + aplica cambios)

```bash
npx prisma migrate dev --name nombre-del-cambio
```

### Sincronizar cambios al esquema de base de datos sin crear migración (desarrollo rápido)

```bash
npx prisma db push
```
