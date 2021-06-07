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
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.DispatchLocation;
import org.openapitools.client.model.InlineResponse2002Timeframe;

/**
 * InlineResponse2002
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-06-07T17:52:38.075125Z[Etc/UTC]")
public class InlineResponse2002 {
  public static final String SERIALIZED_NAME_PREMIX = "premix";
  @SerializedName(SERIALIZED_NAME_PREMIX)
  private Object premix;

  public static final String SERIALIZED_NAME_POSTMIX = "postmix";
  @SerializedName(SERIALIZED_NAME_POSTMIX)
  private Object postmix;

  public static final String SERIALIZED_NAME_DISPATCH_FROM = "dispatch_from";
  @SerializedName(SERIALIZED_NAME_DISPATCH_FROM)
  private List<DispatchLocation> dispatchFrom = null;

  public static final String SERIALIZED_NAME_DISPATCH_TARGET = "dispatch_target";
  @SerializedName(SERIALIZED_NAME_DISPATCH_TARGET)
  private List<DispatchLocation> dispatchTarget = null;

  public static final String SERIALIZED_NAME_TIMEFRAME = "timeframe";
  @SerializedName(SERIALIZED_NAME_TIMEFRAME)
  private InlineResponse2002Timeframe timeframe;

  public static final String SERIALIZED_NAME_AVG_DISTANCE_KM = "avg_distance_km";
  @SerializedName(SERIALIZED_NAME_AVG_DISTANCE_KM)
  private BigDecimal avgDistanceKm;


  public InlineResponse2002 premix(Object premix) {
    
    this.premix = premix;
    return this;
  }

   /**
   * Green Energy Mix prior to dispatch of given city
   * @return premix
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Green Energy Mix prior to dispatch of given city")

  public Object getPremix() {
    return premix;
  }


  public void setPremix(Object premix) {
    this.premix = premix;
  }


  public InlineResponse2002 postmix(Object postmix) {
    
    this.postmix = postmix;
    return this;
  }

   /**
   * Green Energy Mix after dispatch of given city
   * @return postmix
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Green Energy Mix after dispatch of given city")

  public Object getPostmix() {
    return postmix;
  }


  public void setPostmix(Object postmix) {
    this.postmix = postmix;
  }


  public InlineResponse2002 dispatchFrom(List<DispatchLocation> dispatchFrom) {
    
    this.dispatchFrom = dispatchFrom;
    return this;
  }

  public InlineResponse2002 addDispatchFromItem(DispatchLocation dispatchFromItem) {
    if (this.dispatchFrom == null) {
      this.dispatchFrom = new ArrayList<DispatchLocation>();
    }
    this.dispatchFrom.add(dispatchFromItem);
    return this;
  }

   /**
   * List of current sources of green energy (into requested location)
   * @return dispatchFrom
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "List of current sources of green energy (into requested location)")

  public List<DispatchLocation> getDispatchFrom() {
    return dispatchFrom;
  }


  public void setDispatchFrom(List<DispatchLocation> dispatchFrom) {
    this.dispatchFrom = dispatchFrom;
  }


  public InlineResponse2002 dispatchTarget(List<DispatchLocation> dispatchTarget) {
    
    this.dispatchTarget = dispatchTarget;
    return this;
  }

  public InlineResponse2002 addDispatchTargetItem(DispatchLocation dispatchTargetItem) {
    if (this.dispatchTarget == null) {
      this.dispatchTarget = new ArrayList<DispatchLocation>();
    }
    this.dispatchTarget.add(dispatchTargetItem);
    return this;
  }

   /**
   * List of current targets of green energy (out of requested location)
   * @return dispatchTarget
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "List of current targets of green energy (out of requested location)")

  public List<DispatchLocation> getDispatchTarget() {
    return dispatchTarget;
  }


  public void setDispatchTarget(List<DispatchLocation> dispatchTarget) {
    this.dispatchTarget = dispatchTarget;
  }


  public InlineResponse2002 timeframe(InlineResponse2002Timeframe timeframe) {
    
    this.timeframe = timeframe;
    return this;
  }

   /**
   * Get timeframe
   * @return timeframe
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public InlineResponse2002Timeframe getTimeframe() {
    return timeframe;
  }


  public void setTimeframe(InlineResponse2002Timeframe timeframe) {
    this.timeframe = timeframe;
  }


  public InlineResponse2002 avgDistanceKm(BigDecimal avgDistanceKm) {
    
    this.avgDistanceKm = avgDistanceKm;
    return this;
  }

   /**
   * Averaged geospatial distance in kilometers between energy generation and usage at requested location.
   * @return avgDistanceKm
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Averaged geospatial distance in kilometers between energy generation and usage at requested location.")

  public BigDecimal getAvgDistanceKm() {
    return avgDistanceKm;
  }


  public void setAvgDistanceKm(BigDecimal avgDistanceKm) {
    this.avgDistanceKm = avgDistanceKm;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2002 inlineResponse2002 = (InlineResponse2002) o;
    return Objects.equals(this.premix, inlineResponse2002.premix) &&
        Objects.equals(this.postmix, inlineResponse2002.postmix) &&
        Objects.equals(this.dispatchFrom, inlineResponse2002.dispatchFrom) &&
        Objects.equals(this.dispatchTarget, inlineResponse2002.dispatchTarget) &&
        Objects.equals(this.timeframe, inlineResponse2002.timeframe) &&
        Objects.equals(this.avgDistanceKm, inlineResponse2002.avgDistanceKm);
  }

  @Override
  public int hashCode() {
    return Objects.hash(premix, postmix, dispatchFrom, dispatchTarget, timeframe, avgDistanceKm);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2002 {\n");
    sb.append("    premix: ").append(toIndentedString(premix)).append("\n");
    sb.append("    postmix: ").append(toIndentedString(postmix)).append("\n");
    sb.append("    dispatchFrom: ").append(toIndentedString(dispatchFrom)).append("\n");
    sb.append("    dispatchTarget: ").append(toIndentedString(dispatchTarget)).append("\n");
    sb.append("    timeframe: ").append(toIndentedString(timeframe)).append("\n");
    sb.append("    avgDistanceKm: ").append(toIndentedString(avgDistanceKm)).append("\n");
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

