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
import org.openapitools.client.model.ForecastItem;
import org.openapitools.client.model.InlineResponse2001Location;
import org.openapitools.client.model.InlineResponse2001Matrix;

/**
 * InlineResponse2001
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-06-10T22:14:05.124306Z[Etc/UTC]")
public class InlineResponse2001 {
  public static final String SERIALIZED_NAME_FORECAST = "forecast";
  @SerializedName(SERIALIZED_NAME_FORECAST)
  private List<ForecastItem> forecast = null;

  public static final String SERIALIZED_NAME_LOCATION = "location";
  @SerializedName(SERIALIZED_NAME_LOCATION)
  private InlineResponse2001Location location;

  public static final String SERIALIZED_NAME_MATRIX = "matrix";
  @SerializedName(SERIALIZED_NAME_MATRIX)
  private InlineResponse2001Matrix matrix;


  public InlineResponse2001 forecast(List<ForecastItem> forecast) {
    
    this.forecast = forecast;
    return this;
  }

  public InlineResponse2001 addForecastItem(ForecastItem forecastItem) {
    if (this.forecast == null) {
      this.forecast = new ArrayList<ForecastItem>();
    }
    this.forecast.add(forecastItem);
    return this;
  }

   /**
   * Prediction for the upcomming hours
   * @return forecast
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Prediction for the upcomming hours")

  public List<ForecastItem> getForecast() {
    return forecast;
  }


  public void setForecast(List<ForecastItem> forecast) {
    this.forecast = forecast;
  }


  public InlineResponse2001 location(InlineResponse2001Location location) {
    
    this.location = location;
    return this;
  }

   /**
   * Get location
   * @return location
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public InlineResponse2001Location getLocation() {
    return location;
  }


  public void setLocation(InlineResponse2001Location location) {
    this.location = location;
  }


  public InlineResponse2001 matrix(InlineResponse2001Matrix matrix) {
    
    this.matrix = matrix;
    return this;
  }

   /**
   * Get matrix
   * @return matrix
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public InlineResponse2001Matrix getMatrix() {
    return matrix;
  }


  public void setMatrix(InlineResponse2001Matrix matrix) {
    this.matrix = matrix;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2001 inlineResponse2001 = (InlineResponse2001) o;
    return Objects.equals(this.forecast, inlineResponse2001.forecast) &&
        Objects.equals(this.location, inlineResponse2001.location) &&
        Objects.equals(this.matrix, inlineResponse2001.matrix);
  }

  @Override
  public int hashCode() {
    return Objects.hash(forecast, location, matrix);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2001 {\n");
    sb.append("    forecast: ").append(toIndentedString(forecast)).append("\n");
    sb.append("    location: ").append(toIndentedString(location)).append("\n");
    sb.append("    matrix: ").append(toIndentedString(matrix)).append("\n");
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

