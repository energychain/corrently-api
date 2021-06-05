# StromkontoLedgerApi

All URIs are relative to *https://api.corrently.io/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**prepareTransaction**](StromkontoLedgerApi.md#prepareTransaction) | **POST** /stromkonto/prepareTransaction | Prepare Transaction
[**stromkontoBalances**](StromkontoLedgerApi.md#stromkontoBalances) | **GET** /stromkonto/balances | Balances
[**stromkontoChoices**](StromkontoLedgerApi.md#stromkontoChoices) | **GET** /stromkonto/choices | Selectable Choices for customer
[**stromkontoLogin**](StromkontoLedgerApi.md#stromkontoLogin) | **POST** /stromkonto/login | Login (via Mail)
[**stromkontoRegister**](StromkontoLedgerApi.md#stromkontoRegister) | **POST** /stromkonto/register | Register (new Stromkonto)


<a name="prepareTransaction"></a>
# **prepareTransaction**
> prepareTransaction(inlineObject2)

Prepare Transaction

Prepares and inques a transaction (transfer) between two accounts (Stromkonten). This might be used to send any balanced entity. Using this endpoint will only prepare the transaction and enques it for signing and countersigning. This is done from within the user UI using validation process. Note: This API method does not validate any transations. In other words authentication, authorization, validation and actual transfer of value is done using a smart contract during processing in the energy blockchain. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.StromkontoLedgerApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.corrently.io/v2.0");

    StromkontoLedgerApi apiInstance = new StromkontoLedgerApi(defaultClient);
    InlineObject2 inlineObject2 = new InlineObject2(); // InlineObject2 | 
    try {
      apiInstance.prepareTransaction(inlineObject2);
    } catch (ApiException e) {
      System.err.println("Exception when calling StromkontoLedgerApi#prepareTransaction");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

<a name="stromkontoBalances"></a>
# **stromkontoBalances**
> List&lt;Balance&gt; stromkontoBalances(account)

Balances

Stromkonto represents a core component of the Corrently Ecosystem. It is a ledger for green energy related transactions and gets heavily used by the public Web-UI on www.stromkonto.net . Beside of some decoration and reformating operations all data is backed by the [Energychain blockchain](https://github.com/energychain/) to provide consensus of balances and transactions. Use this API Endppoint if you prefere not to work with low level Distributed Ledger Technology (Blockchain). 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.StromkontoLedgerApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.corrently.io/v2.0");

    StromkontoLedgerApi apiInstance = new StromkontoLedgerApi(defaultClient);
    String account = "account_example"; // String | Ethereum style address referencing a valid account (AKA Stromkonto).
    try {
      List<Balance> result = apiInstance.stromkontoBalances(account);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StromkontoLedgerApi#stromkontoBalances");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **String**| Ethereum style address referencing a valid account (AKA Stromkonto). | [optional]

### Return type

[**List&lt;Balance&gt;**](Balance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

<a name="stromkontoChoices"></a>
# **stromkontoChoices**
> List&lt;Balance&gt; stromkontoChoices(account)

Selectable Choices for customer

Signable choices (contract changes) for customer. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.StromkontoLedgerApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.corrently.io/v2.0");

    StromkontoLedgerApi apiInstance = new StromkontoLedgerApi(defaultClient);
    String account = "account_example"; // String | Ethereum style address referencing a valid account alias (never use Stromkonto directly!).
    try {
      List<Balance> result = apiInstance.stromkontoChoices(account);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StromkontoLedgerApi#stromkontoChoices");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **String**| Ethereum style address referencing a valid account alias (never use Stromkonto directly!). | [optional]

### Return type

[**List&lt;Balance&gt;**](Balance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

<a name="stromkontoLogin"></a>
# **stromkontoLogin**
> InlineResponse200 stromkontoLogin(inlineObject1)

Login (via Mail)

Sends a mail to a given email address to login this user. This function makes life a bit easier in order to not having to deal with private key protection on the user side as a shared key is used to sign transactions onbehalf of a particular account.  However viewing consensus information (balances) are public and *might move* from account to account without prior notification. Best practice for third party uses is to always start a session with the login RESP call and only create a user in case the response indicates an &#x60;unregistered&#x60; status. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.StromkontoLedgerApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.corrently.io/v2.0");

    StromkontoLedgerApi apiInstance = new StromkontoLedgerApi(defaultClient);
    InlineObject1 inlineObject1 = new InlineObject1(); // InlineObject1 | 
    try {
      InlineResponse200 result = apiInstance.stromkontoLogin(inlineObject1);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling StromkontoLedgerApi#stromkontoLogin");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  |

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

<a name="stromkontoRegister"></a>
# **stromkontoRegister**
> stromkontoRegister(inlineObject)

Register (new Stromkonto)

Calling this method with an unregistered (new) email will create a new account (Stromkonto) with all balances having a value of &#x60;0&#x60; and no transaction history. In addition some basic properties like region and zipcode are set to allow further operation of account. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.StromkontoLedgerApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.corrently.io/v2.0");

    StromkontoLedgerApi apiInstance = new StromkontoLedgerApi(defaultClient);
    InlineObject inlineObject = new InlineObject(); // InlineObject | 
    try {
      apiInstance.stromkontoRegister(inlineObject);
    } catch (ApiException e) {
      System.err.println("Exception when calling StromkontoLedgerApi#stromkontoRegister");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

