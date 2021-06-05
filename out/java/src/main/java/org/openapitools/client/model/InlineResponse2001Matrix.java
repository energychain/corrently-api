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
import org.openapitools.client.model.InlineResponse2001MatrixH0;

/**
 * Device switching recommendation.
 */
@ApiModel(description = "Device switching recommendation.")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-06-05T14:10:22.651304Z[Etc/UTC]")
public class InlineResponse2001Matrix {
  public static final String SERIALIZED_NAME_H0 = "h0";
  @SerializedName(SERIALIZED_NAME_H0)
  private InlineResponse2001MatrixH0 h0;


  public InlineResponse2001Matrix h0(InlineResponse2001MatrixH0 h0) {
    
    this.h0 = h0;
    return this;
  }

   /**
   * Get h0
   * @return h0
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public InlineResponse2001MatrixH0 getH0() {
    return h0;
  }


  public void setH0(InlineResponse2001MatrixH0 h0) {
    this.h0 = h0;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2001Matrix inlineResponse2001Matrix = (InlineResponse2001Matrix) o;
    return Objects.equals(this.h0, inlineResponse2001Matrix.h0);
  }

  @Override
  public int hashCode() {
    return Objects.hash(h0);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2001Matrix {\n");
    sb.append("    h0: ").append(toIndentedString(h0)).append("\n");
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

