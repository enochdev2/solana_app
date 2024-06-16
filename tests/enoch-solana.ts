import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { EnochSolana } from "../target/types/enoch_solana";



describe("enoch_solana", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.EnochSolana as Program<EnochSolana>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initializeUser().rpc();
    console.log("Your transaction signature", tx);
  });
});

// describe("enoch-solana", () => {
//   // Configure the client to use the local cluster.
//   anchor.setProvider(anchor.AnchorProvider.env());

//   const program = anchor.workspace.EnochSolana as Program<EnochSolana>;

//   it("Is initialized!", async () => {
//     // Add your test here.
//     const tx = await program.methods.initialize().rpc();
//     console.log("Your transaction signature", tx);
//   });
// });



// import * as anchor from "@project-serum/anchor";
// import { Program } from "@project-serum/anchor";
// import { CleverTodo } from "../target/types/clever_todo";

// describe("clever-todo", () => {
//   // Configure the client to use the local cluster.
//   anchor.setProvider(anchor.AnchorProvider.env());

//   const program = anchor.workspace.CleverTodo as Program<CleverTodo>;

//   it("Is initialized!", async () => {
//     // Add your test here.
//     const tx = await program.methods.initialize().rpc();
//     console.log("Your transaction signature", tx);
//   });
// });




// [features]
// seeds = false
// [programs.localnet]
// clever_todo = "FHi9b593PHHVjcrvRBXjAmRd6JsHkWCoLmC8CHdkDUy3"

// [programs.devnet]
// clever_todo = "FHi9b593PHHVjcrvRBXjAmRd6JsHkWCoLmC8CHdkDUy3"

// [registry]
// url = "https://anchor.projectserum.com"

// [provider]
// cluster = "devnet"
// wallet = "/home/john/.config/solana/id.json"

// [scripts]
// test = "yarn run ts-mocha -p ./tsconfig.json -t 1000000 tests/**/*.ts"
