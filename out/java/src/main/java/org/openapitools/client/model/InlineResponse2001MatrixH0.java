/*
 * Corrently.io
 * *Corrently - from italian corrente, which is energy* # Introduction The Corrently ecosystem gets maintained by [STROMDAO GmbH](https://www.stromdao.de/) to support green energy services for prosumers, grid operators, regulators, integrators or any other party with an emerging need of consensus driven management. As the [energy product Corrently](https://www.corrently.de/) got first launched in Germany parts of this documentation provide simple translations for better understanding. 
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
 * Indicates number of hours a device should run
 */
@ApiModel(description = "Indicates number of hours a device should run")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-06-05T14:10:22.651304Z[Etc/UTC]")
public class InlineResponse2001MatrixH0 {
  public static final String SERIALIZED_NAME_AVG1 = "avg_1";
  @SerializedName(SERIALIZED_NAME_AVG1)
  private String avg1;

  public static final String SERIALIZED_NAME_AVG2 = "avg_2";
  @SerializedName(SERIALIZED_NAME_AVG2)
  private String avg2;

  public static final String SERIALIZED_NAME_AVG3 = "avg_3";
  @SerializedName(SERIALIZED_NAME_AVG3)
  private String avg3;


  public InlineResponse2001MatrixH0 avg1(String avg1) {
    
    this.avg1 = avg1;
    return this;
  }

   /**
   * device should run in 1 hour
   * @return avg1
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "device should run in 1 hour")

  public String getAvg1() {
    return avg1;
  }


  public void setAvg1(String avg1) {
    this.avg1 = avg1;
  }


  public InlineResponse2001MatrixH0 avg2(String avg2) {
    
    this.avg2 = avg2;
    return this;
  }

   /**
   * device should run in 2 hours
   * @return avg2
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "device should run in 2 hours")

  public String getAvg2() {
    return avg2;
  }


  public void setAvg2(String avg2) {
    this.avg2 = avg2;
  }


  public InlineResponse2001MatrixH0 avg3(String avg3) {
    
    this.avg3 = avg3;
    return this;
  }

   /**
   * device should run in 3 hour
   * @return avg3
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "device should run in 3 hour")

  public String getAvg3() {
    return avg3;
  }


  public void setAvg3(String avg3) {
    this.avg3 = avg3;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2001MatrixH0 inlineResponse2001MatrixH0 = (InlineResponse2001MatrixH0) o;
    return Objects.equals(this.avg1, inlineResponse2001MatrixH0.avg1) &&
        Objects.equals(this.avg2, inlineResponse2001MatrixH0.avg2) &&
        Objects.equals(this.avg3, inlineResponse2001MatrixH0.avg3);
  }

  @Override
  public int hashCode() {
    return Objects.hash(avg1, avg2, avg3);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2001MatrixH0 {\n");
    sb.append("    avg1: ").append(toIndentedString(avg1)).append("\n");
    sb.append("    avg2: ").append(toIndentedString(avg2)).append("\n");
    sb.append("    avg3: ").append(toIndentedString(avg3)).append("\n");
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

