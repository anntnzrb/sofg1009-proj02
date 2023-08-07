# Backend

## Pre-Requisitos

- Ruby
- Bundler

**NOTA**: Revisar versiones en el archivo `.devcontainer/devcontainer.json`.

## Uso

### Instalar Dependencias

```sh
bundle install
```

### Entorno

Copiar `.env` y configurar las variables de entorno.

```sh
cp .env.example .env
```

### Ejecutar

```sh
bundle exec rerun rackup

# ó

bundle exec rerun rackup --port <PORT>
```
