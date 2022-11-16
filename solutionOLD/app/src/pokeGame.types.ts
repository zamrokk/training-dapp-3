import { address, MMap, nat, ticket } from "./type-aliases";
import {
  ContractAbstractionFromContractType,
  WalletContractAbstractionFromContractType,
} from "./type-utils";

export type Storage = {
  feedback: string;
  pokeTraces: MMap<
    address,
    {
      feedback: string;
      receiver: address;
    }
  >;
  ticketOwnership: MMap<address, ticket>;
};

type Methods = {
  init: (_0: address, _1: nat) => Promise<void>;
  poke: () => Promise<void>;
  pokeAndGetFeedback: (param: address) => Promise<void>;
};

type MethodsObject = {
  init: (params: { 0: address; 1: nat }) => Promise<void>;
  poke: () => Promise<void>;
  pokeAndGetFeedback: (param: address) => Promise<void>;
};

type contractTypes = {
  methods: Methods;
  methodsObject: MethodsObject;
  storage: Storage;
  code: { __type: "PokeGameCode"; protocol: string; code: object[] };
};
export type PokeGameContractType =
  ContractAbstractionFromContractType<contractTypes>;
export type PokeGameWalletType =
  WalletContractAbstractionFromContractType<contractTypes>;