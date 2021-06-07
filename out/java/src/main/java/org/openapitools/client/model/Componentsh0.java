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

/**
 * Componentsh0
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-06-07T17:49:18.134057Z[Etc/UTC]")
public class Componentsh0 {
  public static final String SERIALIZED_NAME_SUM = "sum";
  @SerializedName(SERIALIZED_NAME_SUM)
  private Double sum = null;

  public static final String SERIALIZED_NAME_DESCRIBTION = "describtion";
  @SerializedName(SERIALIZED_NAME_DESCRIBTION)
  private String describtion;

  public static final String SERIALIZED_NAME_MUTLITYPLIER = "mutlityplier";
  @SerializedName(SERIALIZED_NAME_MUTLITYPLIER)
  private String mutlityplier;

  public static final String SERIALIZED_NAME_PER = "per";
  @SerializedName(SERIALIZED_NAME_PER)
  private Double per = null;

  public static final String SERIALIZED_NAME_COMPONENTS = "components";
  @SerializedName(SERIALIZED_NAME_COMPONENTS)
  private List<Componentsh0> components = null;


  public Componentsh0 sum(Double sum) {
    
    this.sum = sum;
    return this;
  }

   /**
   * Total sum in Euro for this price component.
   * @return sum
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "22.12", value = "Total sum in Euro for this price component.")

  public Double getSum() {
    return sum;
  }


  public void setSum(Double sum) {
    this.sum = sum;
  }


  public Componentsh0 describtion(String describtion) {
    
    this.describtion = describtion;
    return this;
  }

   /**
   * What is this price component about
   * @return describtion
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Grundgebühr", value = "What is this price component about")

  public String getDescribtion() {
    return describtion;
  }


  public void setDescribtion(String describtion) {
    this.describtion = describtion;
  }


  public Componentsh0 mutlityplier(String mutlityplier) {
    
    this.mutlityplier = mutlityplier;
    return this;
  }

   /**
   * Frequency/dependency of component
   * @return mutlityplier
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "month", value = "Frequency/dependency of component")

  public String getMutlityplier() {
    return mutlityplier;
  }


  public void setMutlityplier(String mutlityplier) {
    this.mutlityplier = mutlityplier;
  }


  public Componentsh0 per(Double per) {
    
    this.per = per;
    return this;
  }

   /**
   * Single unit price multiyplier is based on
   * @return per
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "0.012", value = "Single unit price multiyplier is based on")

  public Double getPer() {
    return per;
  }


  public void setPer(Double per) {
    this.per = per;
  }


  public Componentsh0 components(List<Componentsh0> components) {
    
    this.components = components;
    return this;
  }

  public Componentsh0 addComponentsItem(Componentsh0 componentsItem) {
    if (this.components == null) {
      this.components = new ArrayList<Componentsh0>();
    }
    this.components.add(componentsItem);
    return this;
  }

   /**
   * Sub components of this price
   * @return components
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Sub components of this price")

  public List<Componentsh0> getComponents() {
    return components;
  }


  public void setComponents(List<Componentsh0> components) {
    this.components = components;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Componentsh0 componentsh0 = (Componentsh0) o;
    return Objects.equals(this.sum, componentsh0.sum) &&
        Objects.equals(this.describtion, componentsh0.describtion) &&
        Objects.equals(this.mutlityplier, componentsh0.mutlityplier) &&
        Objects.equals(this.per, componentsh0.per) &&
        Objects.equals(this.components, componentsh0.components);
  }

  @Override
  public int hashCode() {
    return Objects.hash(sum, describtion, mutlityplier, per, components);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Componentsh0 {\n");
    sb.append("    sum: ").append(toIndentedString(sum)).append("\n");
    sb.append("    describtion: ").append(toIndentedString(describtion)).append("\n");
    sb.append("    mutlityplier: ").append(toIndentedString(mutlityplier)).append("\n");
    sb.append("    per: ").append(toIndentedString(per)).append("\n");
    sb.append("    components: ").append(toIndentedString(components)).append("\n");
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

