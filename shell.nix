with import <nixpkgs> {};
mkShell {
    buildInputs = [
        nodejs_22
        pnpm
    ];
}
