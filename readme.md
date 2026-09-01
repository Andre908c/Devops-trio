# DevOps Trio

Proyecto colaborativo sobre **DevOps**.

## ¿Qué es DevOps?

**DevOps** es una cultura y conjunto de prácticas que unen el desarrollo de software (**Dev**) con las operaciones de IT (**Ops**). 

Su objetivo principal es entregar software de forma **más rápida, confiable y continua**, eliminando las barreras entre los equipos de desarrollo y operaciones.

### Principios clave de DevOps:

- **Colaboración** entre equipos
- **Automatización** de procesos
- **Integración Continua (CI)**
- **Entrega Continua (CD)**
- **Monitoreo** constante
- **Infraestructura como Código (IaC)**

---

## ¿Cómo funciona DevOps?

El ciclo de DevOps se representa normalmente como un bucle infinito:

1. **Plan** → Planificación de funcionalidades
2. **Code** → Escritura del código
3. **Build** → Compilación y empaquetado
4. **Test** → Pruebas automáticas
5. **Release** → Preparación de la versión
6. **Deploy** → Despliegue en producción
7. **Operate** → Operación del sistema
8. **Monitor** → Monitoreo y feedback

Este ciclo se repite constantemente, permitiendo mejoras continuas.

---

## Herramientas comunes en DevOps

| Área                    | Herramientas populares                  |
|-------------------------|-----------------------------------------|
| Control de versiones    | Git, GitHub, GitLab                     |
| CI/CD                   | GitHub Actions, Jenkins, GitLab CI      |
| Contenedores            | Docker, Kubernetes                      |
| Infraestructura         | Terraform, Ansible                      |
| Monitoreo               | Prometheus, Grafana, ELK Stack          |
| Cloud                   | AWS, Azure, Google Cloud                |

---

## Objetivo de este repositorio

Este repositorio es un espacio de trabajo colaborativo del equipo **DevOps Trio**, donde practicamos:

- Uso de Git y GitHub
- Trabajo en equipo con ramas y pull requests
- Buenas prácticas de desarrollo
- Introducción a conceptos de DevOps

---

# 1. Actualizar el repositorio
 ```
git pull origin main
 ```
# 2. Hacer cambios en los archivos...

# 3. Ver qué archivos modificaste
 ```
git status
 ```
# 4. Agregar los cambios
 ```
git add .
 ```
# 5. Guardar los cambios (commit)
 ```
git commit -m "descripción clara de lo que hiciste"
 ```
# 6. Subir los cambios
 ```
git push origin main
 ```

## Comandos más comunes de Git

| Comando                    | Descripción                          |
|-------------------------|-----------------------------------------|
| git status                 | Git, GitHub, GitLab (ver estado de los archivos              |
| git pull origin main       | Actualizar (bajar cambios)          |
| git add .                  | Agregar todos los cambios           |
| git add nombre-archivo     | Agregar un archivo específico       |
| git commit -m "mensaje"    | Guardar los cambios con un mensaje  |
| git push origin main       |Subir los cambios al repositorio    |
| git log --oneline          | Ver el historial de commits        |
| git clone url              | Clonar un repositorio              |
| git branch                 | Ver las ramas                      |
| git checkout -b nombre-rama| Crear y cambiar a una nueva rama   |
| git restore nombre-archivo | Deshacer cambios de un archivo     |
| git rm nombre-archivo      | Eliminar un archivo                |

## Solución de problemas comunes
Error: "not a git repository"
No estás dentro de la carpeta del proyecto. Entra con:
 ```
cd ruta/de/la/carpeta/Devops-trio
 ```

## Error: "Updates were rejected"
 ```
git pull origin main
```
# resuelve conflictos si aparecen
```
git push origin main
 ```

## Error: "Author identity unknown"
Configura tu nombre y correo:
```
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```
## Error: "git no se reconoce como comando"
Git no está instalado o no reiniciaste la terminal después de instalarlo.

## Solucions de problemas A
```
git stash
git pull origin main
git stash pop
```

## Solucions de problemas B
```
git add README.md
git commit -m "Actualicé el README"
git pull origin main
```
## Estructura del proyecto
```
Devops-trio/
├── index.html
├── style.CSS
├── JavaScript.js
├── README.md
└── ...
```
## Cómo contribuir

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Andre908c/Devops-trio.git
