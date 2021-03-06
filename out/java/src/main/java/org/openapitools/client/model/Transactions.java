/*
 * Corrently.io
 * *Corrently - from italian corrente, which is energy* # Introduction The Corrently ecosystem gets maintained by [STROMDAO GmbH](https://www.stromdao.de/) to support green energy services for prosumers, grid operators, regulators, integrators or any other party with an emerging need of consensus driven management. As the [energy product Corrently](https://www.corrently.de/) got first launched in Germany parts of this documentation provide simple translations for better understanding. [Released SKDs for Download](https://github.com/energychain/corrently-api/releases) 
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: dev@stromdao.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * Transactions
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-06-10T22:14:05.124306Z[Etc/UTC]")
public class Transactions {
  public static final String SERIALIZED_NAME_TIME_STAMP = "timeStamp";
  @SerializedName(SERIALIZED_NAME_TIME_STAMP)
  private Integer timeStamp;

  public static final String SERIALIZED_NAME_TXID = "txid";
  @SerializedName(SERIALIZED_NAME_TXID)
  private String txid;

  public static final String SERIALIZED_NAME_CASHIER = "cashier";
  @SerializedName(SERIALIZED_NAME_CASHIER)
  private String cashier;

  public static final String SERIALIZED_NAME_TXTYPE = "txtype";
  @SerializedName(SERIALIZED_NAME_TXTYPE)
  private String txtype;

  public static final String SERIALIZED_NAME_VALUE = "value";
  @SerializedName(SERIALIZED_NAME_VALUE)
  private Integer value;


  public Transactions timeStamp(Integer timeStamp) {
    
    this.timeStamp = timeStamp;
    return this;
  }

   /**
   * Cross signed timestamp of transaction
   * @return timeStamp
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1606777200000", value = "Cross signed timestamp of transaction")

  public Integer getTimeStamp() {
    return timeStamp;
  }


  public void setTimeStamp(Integer timeStamp) {
    this.timeStamp = timeStamp;
  }


  public Transactions txid(String txid) {
    
    this.txid = txid;
    return this;
  }

   /**
   * Unique hash of this transaction as provided by counter signing party
   * @return txid
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "722d30b2-b46f-4ed4-a8cd-16d262180d37", value = "Unique hash of this transaction as provided by counter signing party")

  public String getTxid() {
    return txid;
  }


  public void setTxid(String txid) {
    this.txid = txid;
  }


  public Transactions cashier(String cashier) {
    
    this.cashier = cashier;
    return this;
  }

   /**
   * Pretty print of counter signing party
   * @return cashier
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Miller", value = "Pretty print of counter signing party")

  public String getCashier() {
    return cashier;
  }


  public void setCashier(String cashier) {
    this.cashier = cashier;
  }


  public Transactions txtype(String txtype) {
    
    this.txtype = txtype;
    return this;
  }

   /**
   * Type of transaction per cashier implementation and schema
   * @return txtype
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "bank.incGSB", value = "Type of transaction per cashier implementation and schema")

  public String getTxtype() {
    return txtype;
  }


  public void setTxtype(String txtype) {
    this.txtype = txtype;
  }


  public Transactions value(Integer value) {
    
    this.value = value;
    return this;
  }

   /**
   * Amount covered by transaction
   * @return value
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1337", value = "Amount covered by transaction")

  public Integer getValue() {
    return value;
  }


  public void setValue(Integer value) {
    this.value = value;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Transactions transactions = (Transactions) o;
    return Objects.equals(this.timeStamp, transactions.timeStamp) &&
        Objects.equals(this.txid, transactions.txid) &&
        Objects.equals(this.cashier, transactions.cashier) &&
        Objects.equals(this.txtype, transactions.txtype) &&
        Objects.equals(this.value, transactions.value);
  }

  @Override
  public int hashCode() {
    return Objects.hash(timeStamp, txid, cashier, txtype, value);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Transactions {\n");
    sb.append("    timeStamp: ").append(toIndentedString(timeStamp)).append("\n");
    sb.append("    txid: ").append(toIndentedString(txid)).append("\n");
    sb.append("    cashier: ").append(toIndentedString(cashier)).append("\n");
    sb.append("    txtype: ").append(toIndentedString(txtype)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

