# 🏞️ [Land] —

## 🚀 Installation

Clone the repository:

```sh
git clone ssh://git@github.com/CodeEditorLand/Land.git --depth=1 --recurse-submodules --shallow-submodules
```

Install the necessary dependencies using `pnpm`:

```sh
pnpm install
```

Build the `Land`:

```sh
# Build TypeScript and workspace packages
pnpm run prepublishOnly

# Build Debug releases for cargo
cargo build

# Build Production releases for cargo
cargo build --release

# Build the Tauri application
pnpm run tauri build
```

Run the `Land`:

```sh
# Runs the development version of the application
pnpm run tauri dev
```

## 🛠️ Usage

First run the [`Sun`](./Target/release/Sun.exe) binary then the
[`River`](./Target/release/River.exe) to startup the necessary websockets. Then
run the Tauri app [`Mountain`](./Target/release/Mountain.exe)

![`Land`](https://playform.cloud/Image/GitHub/CodeEditorLand/Land/Land.svg?9.07.2024)

## Graph

```mermaid
graph TD
    A[Top Repo: Land]

    subgraph Element
        subgraph Sky
            D[Astro Website: Sky]
            subgraph Public
                D3[Public]
            end
            subgraph Source
                D4[Source]
                subgraph Layout
                    D5[Layout]
                end
                subgraph Pages
                    D6[Pages]
                end
                subgraph Stylesheet
                    D7[Stylesheet]
                end
            end
        end

        subgraph Wind
            F[TypeScript Files: Wind]
            subgraph Source
                F3[Source]
            end
        end

        subgraph Mountain
            G[Tauri]
            subgraph Gen
                G3[Gen]
            end
            subgraph Icons
                G4[Icons]
            end
            subgraph Source
                G5[Source]
            end
        end
    end

    A --> D
    A --> F
    A --> G
    D --> D3
    D --> D4
    D4 --> D5
    D4 --> D6
    D4 --> D7
    F --> F3
    G --> G3
    G --> G4
    G --> G5
```

```mermaid
sequenceDiagram
    participant User
    participant GitHub
    participant PNPM
    participant Cargo

    User->>GitHub: Clone repository
    Note right of GitHub: git clone ssh://git@github.com/CodeEditorLand/Land.git --depth=1 --recurse-submodules --shallow-submodules

    User->>PNPM: Install dependencies
    Note right of PNPM: pnpm install

    User->>Cargo: Build the Mountain
    Note right of Cargo: cargo tauri build

    Note over Cargo: Wind is nested into Sky
    Note over Cargo: Sky is nested into Mountain
    Note over Cargo: Mountain creates the final binary
```

[Land]: https://github.com/CodeEditorLand/Land

## Changelog

See [`CHANGELOG.md`](CHANGELOG.md) for a history of changes to this ecosystem.
