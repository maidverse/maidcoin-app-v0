/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ISupportableInterface extends ethers.utils.Interface {
  functions: {
    "changeSupportedPower(address,int256)": FunctionFragment;
    "checkSupportingRoute(address)": FunctionFragment;
    "setSupportingTo(address,uint256,uint256)": FunctionFragment;
    "shareRewards(uint256,address,uint8)": FunctionFragment;
    "supportedPower(uint256)": FunctionFragment;
    "supportingRoute(uint256)": FunctionFragment;
    "supportingTo(address)": FunctionFragment;
    "totalRewardsFromSupporters(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "changeSupportedPower",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkSupportingRoute",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setSupportingTo",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "shareRewards",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportedPower",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportingRoute",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportingTo",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalRewardsFromSupporters",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "changeSupportedPower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkSupportingRoute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSupportingTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shareRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportedPower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportingRoute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportingTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalRewardsFromSupporters",
    data: BytesLike
  ): Result;

  events: {
    "ChangeSupportedPower(uint256,int256)": EventFragment;
    "ChangeSupportingRoute(uint256,uint256)": EventFragment;
    "SupportTo(address,uint256)": EventFragment;
    "TransferSupportingRewards(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChangeSupportedPower"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangeSupportingRoute"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SupportTo"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferSupportingRewards"): EventFragment;
}

export class ISupportable extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ISupportableInterface;

  functions: {
    changeSupportedPower(
      supporter: string,
      power: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "changeSupportedPower(address,int256)"(
      supporter: string,
      power: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    checkSupportingRoute(
      supporter: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "checkSupportingRoute(address)"(
      supporter: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setSupportingTo(
      supporter: string,
      to: BigNumberish,
      amounts: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setSupportingTo(address,uint256,uint256)"(
      supporter: string,
      to: BigNumberish,
      amounts: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    shareRewards(
      pending: BigNumberish,
      supporter: string,
      supportingRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "shareRewards(uint256,address,uint8)"(
      pending: BigNumberish,
      supporter: string,
      supportingRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    supportedPower(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "supportedPower(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    supportingRoute(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "supportingRoute(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    supportingTo(
      supporter: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "supportingTo(address)"(
      supporter: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalRewardsFromSupporters(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "totalRewardsFromSupporters(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  changeSupportedPower(
    supporter: string,
    power: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "changeSupportedPower(address,int256)"(
    supporter: string,
    power: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  checkSupportingRoute(
    supporter: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "checkSupportingRoute(address)"(
    supporter: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setSupportingTo(
    supporter: string,
    to: BigNumberish,
    amounts: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setSupportingTo(address,uint256,uint256)"(
    supporter: string,
    to: BigNumberish,
    amounts: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  shareRewards(
    pending: BigNumberish,
    supporter: string,
    supportingRatio: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "shareRewards(uint256,address,uint8)"(
    pending: BigNumberish,
    supporter: string,
    supportingRatio: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  supportedPower(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "supportedPower(uint256)"(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  supportingRoute(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "supportingRoute(uint256)"(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  supportingTo(
    supporter: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "supportingTo(address)"(
    supporter: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalRewardsFromSupporters(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "totalRewardsFromSupporters(uint256)"(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    changeSupportedPower(
      supporter: string,
      power: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "changeSupportedPower(address,int256)"(
      supporter: string,
      power: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkSupportingRoute(
      supporter: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    "checkSupportingRoute(address)"(
      supporter: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    setSupportingTo(
      supporter: string,
      to: BigNumberish,
      amounts: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setSupportingTo(address,uint256,uint256)"(
      supporter: string,
      to: BigNumberish,
      amounts: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    shareRewards(
      pending: BigNumberish,
      supporter: string,
      supportingRatio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & {
        nurseOwner: string;
        amountToNurseOwner: BigNumber;
      }
    >;

    "shareRewards(uint256,address,uint8)"(
      pending: BigNumberish,
      supporter: string,
      supportingRatio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & {
        nurseOwner: string;
        amountToNurseOwner: BigNumber;
      }
    >;

    supportedPower(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportedPower(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportingRoute(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportingRoute(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportingTo(
      supporter: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportingTo(address)"(
      supporter: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalRewardsFromSupporters(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalRewardsFromSupporters(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    ChangeSupportedPower(id: BigNumberish | null, power: null): EventFilter;

    ChangeSupportingRoute(
      from: BigNumberish | null,
      to: BigNumberish | null
    ): EventFilter;

    SupportTo(supporter: string | null, to: BigNumberish | null): EventFilter;

    TransferSupportingRewards(
      supporter: string | null,
      id: BigNumberish | null,
      amounts: null
    ): EventFilter;
  };

  estimateGas: {
    changeSupportedPower(
      supporter: string,
      power: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "changeSupportedPower(address,int256)"(
      supporter: string,
      power: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    checkSupportingRoute(
      supporter: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "checkSupportingRoute(address)"(
      supporter: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setSupportingTo(
      supporter: string,
      to: BigNumberish,
      amounts: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setSupportingTo(address,uint256,uint256)"(
      supporter: string,
      to: BigNumberish,
      amounts: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    shareRewards(
      pending: BigNumberish,
      supporter: string,
      supportingRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "shareRewards(uint256,address,uint8)"(
      pending: BigNumberish,
      supporter: string,
      supportingRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    supportedPower(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportedPower(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportingRoute(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportingRoute(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportingTo(
      supporter: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportingTo(address)"(
      supporter: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalRewardsFromSupporters(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalRewardsFromSupporters(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    changeSupportedPower(
      supporter: string,
      power: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "changeSupportedPower(address,int256)"(
      supporter: string,
      power: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    checkSupportingRoute(
      supporter: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "checkSupportingRoute(address)"(
      supporter: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setSupportingTo(
      supporter: string,
      to: BigNumberish,
      amounts: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setSupportingTo(address,uint256,uint256)"(
      supporter: string,
      to: BigNumberish,
      amounts: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    shareRewards(
      pending: BigNumberish,
      supporter: string,
      supportingRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "shareRewards(uint256,address,uint8)"(
      pending: BigNumberish,
      supporter: string,
      supportingRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    supportedPower(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportedPower(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportingRoute(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportingRoute(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportingTo(
      supporter: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportingTo(address)"(
      supporter: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalRewardsFromSupporters(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalRewardsFromSupporters(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
