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
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.Transactions;

/**
 * Balance
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-06-10T22:14:05.124306Z[Etc/UTC]")
public class Balance {
  public static final String SERIALIZED_NAME_SOLL = "soll";
  @SerializedName(SERIALIZED_NAME_SOLL)
  private Integer soll;

  public static final String SERIALIZED_NAME_HABEN = "haben";
  @SerializedName(SERIALIZED_NAME_HABEN)
  private Integer haben;

  public static final String SERIALIZED_NAME_BALANCE = "balance";
  @SerializedName(SERIALIZED_NAME_BALANCE)
  private Integer balance;

  public static final String SERIALIZED_NAME_TXS = "txs";
  @SerializedName(SERIALIZED_NAME_TXS)
  private List<Transactions> txs = null;

  /**
   * Type of subbalance (sub account)
   */
  @JsonAdapter(VariationEnum.Adapter.class)
  public enum VariationEnum {
    GSB("gsb"),
    
    ERZEUGUNG("erzeugung"),
    
    EIGENSTROM("eigenstrom"),
    
    CO2("co2"),
    
    BAEUME("baeume");

    private String value;

    VariationEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static VariationEnum fromValue(String value) {
      for (VariationEnum b : VariationEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<VariationEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final VariationEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public VariationEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return VariationEnum.fromValue(value);
      }
    }
  }

  public static final String SERIALIZED_NAME_VARIATION = "variation";
  @SerializedName(SERIALIZED_NAME_VARIATION)
  private VariationEnum variation;


  public Balance soll(Integer soll) {
    
    this.soll = soll;
    return this;
  }

   /**
   * Sum due by account
   * @return soll
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "20", value = "Sum due by account")

  public Integer getSoll() {
    return soll;
  }


  public void setSoll(Integer soll) {
    this.soll = soll;
  }


  public Balance haben(Integer haben) {
    
    this.haben = haben;
    return this;
  }

   /**
   * Sum owned by account
   * @return haben
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "20", value = "Sum owned by account")

  public Integer getHaben() {
    return haben;
  }


  public void setHaben(Integer haben) {
    this.haben = haben;
  }


  public Balance balance(Integer balance) {
    
    this.balance = balance;
    return this;
  }

   /**
   * Sum owned - sum due by account
   * @return balance
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "20", value = "Sum owned - sum due by account")

  public Integer getBalance() {
    return balance;
  }


  public void setBalance(Integer balance) {
    this.balance = balance;
  }


  public Balance txs(List<Transactions> txs) {
    
    this.txs = txs;
    return this;
  }

  public Balance addTxsItem(Transactions txsItem) {
    if (this.txs == null) {
      this.txs = new ArrayList<Transactions>();
    }
    this.txs.add(txsItem);
    return this;
  }

   /**
   * Get txs
   * @return txs
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<Transactions> getTxs() {
    return txs;
  }


  public void setTxs(List<Transactions> txs) {
    this.txs = txs;
  }


  public Balance variation(VariationEnum variation) {
    
    this.variation = variation;
    return this;
  }

   /**
   * Type of subbalance (sub account)
   * @return variation
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Type of subbalance (sub account)")

  public VariationEnum getVariation() {
    return variation;
  }


  public void setVariation(VariationEnum variation) {
    this.variation = variation;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Balance balance = (Balance) o;
    return Objects.equals(this.soll, balance.soll) &&
        Objects.equals(this.haben, balance.haben) &&
        Objects.equals(this.balance, balance.balance) &&
        Objects.equals(this.txs, balance.txs) &&
        Objects.equals(this.variation, balance.variation);
  }

  @Override
  public int hashCode() {
    return Objects.hash(soll, haben, balance, txs, variation);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Balance {\n");
    sb.append("    soll: ").append(toIndentedString(soll)).append("\n");
    sb.append("    haben: ").append(toIndentedString(haben)).append("\n");
    sb.append("    balance: ").append(toIndentedString(balance)).append("\n");
    sb.append("    txs: ").append(toIndentedString(txs)).append("\n");
    sb.append("    variation: ").append(toIndentedString(variation)).append("\n");
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

