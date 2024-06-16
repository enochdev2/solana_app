export const IDL = {
  "address": "2hy9z3uVwKS2TGzDxkkAXhN9S5wzchfhXWjWL845ZoPe",
  "metadata": {
    "name": "enoch_solana",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "add_todo",
      "discriminator": [
        188,
        16,
        45,
        145,
        4,
        5,
        188,
        75
      ],
      "accounts": [
        {
          "name": "user_profile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  85,
                  83,
                  69,
                  82,
                  95,
                  83,
                  84,
                  65,
                  84,
                  69
                ]
              },
              {
                "kind": "account",
                "path": "authority"
              }
            ]
          }
        },
        {
          "name": "todo_account",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  84,
                  79,
                  68,
                  79,
                  95,
                  83,
                  84,
                  65,
                  84,
                  69
                ]
              },
              {
                "kind": "account",
                "path": "authority"
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true,
          "relations": [
            "user_profile"
          ]
        },
        {
          "name": "system_program",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "_content",
          "type": "string"
        }
      ]
    },
    {
      "name": "initialize_user",
      "discriminator": [
        111,
        17,
        185,
        250,
        60,
        122,
        38,
        254
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "user_profile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  85,
                  83,
                  69,
                  82,
                  95,
                  83,
                  84,
                  65,
                  84,
                  69
                ]
              },
              {
                "kind": "account",
                "path": "authority"
              }
            ]
          }
        },
        {
          "name": "system_program",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "mark_todo",
      "discriminator": [
        70,
        24,
        206,
        243,
        92,
        29,
        249,
        110
      ],
      "accounts": [
        {
          "name": "user_profile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  85,
                  83,
                  69,
                  82,
                  95,
                  83,
                  84,
                  65,
                  84,
                  69
                ]
              },
              {
                "kind": "account",
                "path": "authority"
              }
            ]
          }
        },
        {
          "name": "todo_account",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  84,
                  79,
                  68,
                  79,
                  95,
                  83,
                  84,
                  65,
                  84,
                  69
                ]
              },
              {
                "kind": "account",
                "path": "authority"
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true,
          "relations": [
            "user_profile",
            "todo_account"
          ]
        },
        {
          "name": "system_program",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "_todo_idx",
          "type": "u8"
        }
      ]
    },
    {
      "name": "remove_todo",
      "discriminator": [
        28,
        167,
        91,
        69,
        25,
        225,
        253,
        117
      ],
      "accounts": [
        {
          "name": "user_profile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  85,
                  83,
                  69,
                  82,
                  95,
                  83,
                  84,
                  65,
                  84,
                  69
                ]
              },
              {
                "kind": "account",
                "path": "authority"
              }
            ]
          }
        },
        {
          "name": "todo_account",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  84,
                  79,
                  68,
                  79,
                  95,
                  83,
                  84,
                  65,
                  84,
                  69
                ]
              },
              {
                "kind": "account",
                "path": "authority"
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true,
          "relations": [
            "user_profile",
            "todo_account"
          ]
        },
        {
          "name": "system_program",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "_todo_idx",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "TodoAccount",
      "discriminator": [
        31,
        86,
        84,
        40,
        187,
        31,
        251,
        132
      ]
    },
    {
      "name": "UserProfile",
      "discriminator": [
        32,
        37,
        119,
        205,
        179,
        180,
        13,
        194
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unauthorized",
      "msg": "You are not authorized to perform this action."
    },
    {
      "code": 6001,
      "name": "NotAllowed",
      "msg": "Not allowed"
    },
    {
      "code": 6002,
      "name": "MathOverflow",
      "msg": "Math operation overflow"
    },
    {
      "code": 6003,
      "name": "AlreadyMarked",
      "msg": "Already marked"
    }
  ],
  "types": [
    {
      "name": "TodoAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "idx",
            "type": "u8"
          },
          {
            "name": "content",
            "type": "string"
          },
          {
            "name": "marked",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "UserProfile",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "last_todo",
            "type": "u8"
          },
          {
            "name": "todo_count",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "constants": [
    {
      "name": "TODO_TAG",
      "type": "bytes",
      "value": "[84, 79, 68, 79, 95, 83, 84, 65, 84, 69]"
    },
    {
      "name": "USER_TAG",
      "type": "bytes",
      "value": "[85, 83, 69, 82, 95, 83, 84, 65, 84, 69]"
    }
  ]
}