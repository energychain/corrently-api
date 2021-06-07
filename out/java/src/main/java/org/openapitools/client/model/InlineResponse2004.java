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
 * InlineResponse2004
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2021-06-07T17:52:38.075125Z[Etc/UTC]")
public class InlineResponse2004 {
  public static final String SERIALIZED_NAME_ACCOUNT = "account";
  @SerializedName(SERIALIZED_NAME_ACCOUNT)
  private String account;

  public static final String SERIALIZED_NAME_180 = "1.8.0";
  @SerializedName(SERIALIZED_NAME_180)
  private Integer _1_8_0;

  public static final String SERIALIZED_NAME_181 = "1.8.1";
  @SerializedName(SERIALIZED_NAME_181)
  private Integer _1_8_1;

  public static final String SERIALIZED_NAME_182 = "1.8.2";
  @SerializedName(SERIALIZED_NAME_182)
  private Integer _1_8_2;

  public static final String SERIALIZED_NAME_TIME_STAMP = "timeStamp";
  @SerializedName(SERIALIZED_NAME_TIME_STAMP)
  private Integer timeStamp;

  public static final String SERIALIZED_NAME_PROCESSING_TIME = "_processingTime";
  @SerializedName(SERIALIZED_NAME_PROCESSING_TIME)
  private Integer processingTime;

  public static final String SERIALIZED_NAME_CO2_G_STANDARD = "co2_g_standard";
  @SerializedName(SERIALIZED_NAME_CO2_G_STANDARD)
  private Integer co2GStandard;

  public static final String SERIALIZED_NAME_CO2_G_OEKOSTROM = "co2_g_oekostrom";
  @SerializedName(SERIALIZED_NAME_CO2_G_OEKOSTROM)
  private Integer co2GOekostrom;

  public static final String SERIALIZED_NAME_TTL = "ttl";
  @SerializedName(SERIALIZED_NAME_TTL)
  private Integer ttl;

  public static final String SERIALIZED_NAME_CREDITS = "credits";
  @SerializedName(SERIALIZED_NAME_CREDITS)
  private Object credits = null;


  public InlineResponse2004 account(String account) {
    
    this.account = account;
    return this;
  }

   /**
   * Stromkonto/Metering address allocated (this is not the MELOID!)
   * @return account
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Stromkonto/Metering address allocated (this is not the MELOID!)")

  public String getAccount() {
    return account;
  }


  public void setAccount(String account) {
    this.account = account;
  }


  public InlineResponse2004 _1_8_0(Integer _1_8_0) {
    
    this._1_8_0 = _1_8_0;
    return this;
  }

   /**
   * Reading as provided as input in Wh
   * @return _1_8_0
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Reading as provided as input in Wh")

  public Integer get180() {
    return _1_8_0;
  }


  public void set180(Integer _1_8_0) {
    this._1_8_0 = _1_8_0;
  }


  public InlineResponse2004 _1_8_1(Integer _1_8_1) {
    
    this._1_8_1 = _1_8_1;
    return this;
  }

   /**
   * Green energy calculated using Green Power Index (GrünstromIndex) in Wh
   * @return _1_8_1
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Green energy calculated using Green Power Index (GrünstromIndex) in Wh")

  public Integer get181() {
    return _1_8_1;
  }


  public void set181(Integer _1_8_1) {
    this._1_8_1 = _1_8_1;
  }


  public InlineResponse2004 _1_8_2(Integer _1_8_2) {
    
    this._1_8_2 = _1_8_2;
    return this;
  }

   /**
   * Grey energy calculated using Green Power Index (GrünstromIndex) in Wh
   * @return _1_8_2
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Grey energy calculated using Green Power Index (GrünstromIndex) in Wh")

  public Integer get182() {
    return _1_8_2;
  }


  public void set182(Integer _1_8_2) {
    this._1_8_2 = _1_8_2;
  }


  public InlineResponse2004 timeStamp(Integer timeStamp) {
    
    this.timeStamp = timeStamp;
    return this;
  }

   /**
   * API Consensus time this reading was fully received
   * @return timeStamp
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "API Consensus time this reading was fully received")

  public Integer getTimeStamp() {
    return timeStamp;
  }


  public void setTimeStamp(Integer timeStamp) {
    this.timeStamp = timeStamp;
  }


  public InlineResponse2004 processingTime(Integer processingTime) {
    
    this.processingTime = processingTime;
    return this;
  }

   /**
   * Time this reading got imported into consensus (e.q. signed timestamp).
   * @return processingTime
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Time this reading got imported into consensus (e.q. signed timestamp).")

  public Integer getProcessingTime() {
    return processingTime;
  }


  public void setProcessingTime(Integer processingTime) {
    this.processingTime = processingTime;
  }


  public InlineResponse2004 co2GStandard(Integer co2GStandard) {
    
    this.co2GStandard = co2GStandard;
    return this;
  }

   /**
   * CO2 Emission of metered energy in a standard mix
   * @return co2GStandard
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "CO2 Emission of metered energy in a standard mix")

  public Integer getCo2GStandard() {
    return co2GStandard;
  }


  public void setCo2GStandard(Integer co2GStandard) {
    this.co2GStandard = co2GStandard;
  }


  public InlineResponse2004 co2GOekostrom(Integer co2GOekostrom) {
    
    this.co2GOekostrom = co2GOekostrom;
    return this;
  }

   /**
   * CO2 Emission of metered energy in a green energy mix (e.q. Ökostromtarif)
   * @return co2GOekostrom
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "CO2 Emission of metered energy in a green energy mix (e.q. Ökostromtarif)")

  public Integer getCo2GOekostrom() {
    return co2GOekostrom;
  }


  public void setCo2GOekostrom(Integer co2GOekostrom) {
    this.co2GOekostrom = co2GOekostrom;
  }


  public InlineResponse2004 ttl(Integer ttl) {
    
    this.ttl = ttl;
    return this;
  }

   /**
   * Time to Live for this reader. If no update is provided it gets decommissioned.
   * @return ttl
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Time to Live for this reader. If no update is provided it gets decommissioned.")

  public Integer getTtl() {
    return ttl;
  }


  public void setTtl(Integer ttl) {
    this.ttl = ttl;
  }


  public InlineResponse2004 credits(Object credits) {
    
    this.credits = credits;
    return this;
  }

   /**
   * Update credits this meter has. Gets refilled automtically to prevent too frequent updates
   * @return credits
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Update credits this meter has. Gets refilled automtically to prevent too frequent updates")

  public Object getCredits() {
    return credits;
  }


  public void setCredits(Object credits) {
    this.credits = credits;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2004 inlineResponse2004 = (InlineResponse2004) o;
    return Objects.equals(this.account, inlineResponse2004.account) &&
        Objects.equals(this._1_8_0, inlineResponse2004._1_8_0) &&
        Objects.equals(this._1_8_1, inlineResponse2004._1_8_1) &&
        Objects.equals(this._1_8_2, inlineResponse2004._1_8_2) &&
        Objects.equals(this.timeStamp, inlineResponse2004.timeStamp) &&
        Objects.equals(this.processingTime, inlineResponse2004.processingTime) &&
        Objects.equals(this.co2GStandard, inlineResponse2004.co2GStandard) &&
        Objects.equals(this.co2GOekostrom, inlineResponse2004.co2GOekostrom) &&
        Objects.equals(this.ttl, inlineResponse2004.ttl) &&
        Objects.equals(this.credits, inlineResponse2004.credits);
  }

  @Override
  public int hashCode() {
    return Objects.hash(account, _1_8_0, _1_8_1, _1_8_2, timeStamp, processingTime, co2GStandard, co2GOekostrom, ttl, credits);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2004 {\n");
    sb.append("    account: ").append(toIndentedString(account)).append("\n");
    sb.append("    _1_8_0: ").append(toIndentedString(_1_8_0)).append("\n");
    sb.append("    _1_8_1: ").append(toIndentedString(_1_8_1)).append("\n");
    sb.append("    _1_8_2: ").append(toIndentedString(_1_8_2)).append("\n");
    sb.append("    timeStamp: ").append(toIndentedString(timeStamp)).append("\n");
    sb.append("    processingTime: ").append(toIndentedString(processingTime)).append("\n");
    sb.append("    co2GStandard: ").append(toIndentedString(co2GStandard)).append("\n");
    sb.append("    co2GOekostrom: ").append(toIndentedString(co2GOekostrom)).append("\n");
    sb.append("    ttl: ").append(toIndentedString(ttl)).append("\n");
    sb.append("    credits: ").append(toIndentedString(credits)).append("\n");
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

