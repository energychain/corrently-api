<?php
/**
 * SmartHomeApi
 * PHP version 7.2
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Corrently.io
 *
 * *Corrently - from italian corrente, which is energy* # Introduction The Corrently ecosystem gets maintained by [STROMDAO GmbH](https://www.stromdao.de/) to support green energy services for prosumers, grid operators, regulators, integrators or any other party with an emerging need of consensus driven management. As the [energy product Corrently](https://www.corrently.de/) got first launched in Germany parts of this documentation provide simple translations for better understanding. [Released SKDs for Download](https://github.com/energychain/corrently-api/releases)
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: dev@stromdao.com
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 5.2.0-SNAPSHOT
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Api;

use GuzzleHttp\Client;
use GuzzleHttp\ClientInterface;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\MultipartStream;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\RequestOptions;
use OpenAPI\Client\ApiException;
use OpenAPI\Client\Configuration;
use OpenAPI\Client\HeaderSelector;
use OpenAPI\Client\ObjectSerializer;

/**
 * SmartHomeApi Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class SmartHomeApi
{
    /**
     * @var ClientInterface
     */
    protected $client;

    /**
     * @var Configuration
     */
    protected $config;

    /**
     * @var HeaderSelector
     */
    protected $headerSelector;

    /**
     * @var int Host index
     */
    protected $hostIndex;

    /**
     * @param ClientInterface $client
     * @param Configuration   $config
     * @param HeaderSelector  $selector
     * @param int             $hostIndex (Optional) host index to select the list of hosts if defined in the OpenAPI spec
     */
    public function __construct(
        ClientInterface $client = null,
        Configuration $config = null,
        HeaderSelector $selector = null,
        $hostIndex = 0
    ) {
        $this->client = $client ?: new Client();
        $this->config = $config ?: new Configuration();
        $this->headerSelector = $selector ?: new HeaderSelector();
        $this->hostIndex = $hostIndex;
    }

    /**
     * Set the host index
     *
     * @param int $hostIndex Host index (required)
     */
    public function setHostIndex($hostIndex): void
    {
        $this->hostIndex = $hostIndex;
    }

    /**
     * Get the host index
     *
     * @return int Host index
     */
    public function getHostIndex()
    {
        return $this->hostIndex;
    }

    /**
     * @return Configuration
     */
    public function getConfig()
    {
        return $this->config;
    }

    /**
     * Operation gsiBesthour
     *
     * Get best hour (with most regional green energy) in a given timeframe.
     *
     * @param  string $zip Zipcode (Postleitzahl) of a city in Germany. (optional)
     * @param  string $key Any valid Stromkonto account (address). (optional)
     * @param  int $timeframe Number of hours to check (default 24 hours from now). (optional)
     * @param  int $hours How many hours in row do you need the device turned on? (optional)
     *
     * @throws \OpenAPI\Client\ApiException on non-2xx response
     * @throws \InvalidArgumentException
     * @return bool
     */
    public function gsiBesthour($zip = null, $key = null, $timeframe = null, $hours = null)
    {
        list($response) = $this->gsiBesthourWithHttpInfo($zip, $key, $timeframe, $hours);
        return $response;
    }

    /**
     * Operation gsiBesthourWithHttpInfo
     *
     * Get best hour (with most regional green energy) in a given timeframe.
     *
     * @param  string $zip Zipcode (Postleitzahl) of a city in Germany. (optional)
     * @param  string $key Any valid Stromkonto account (address). (optional)
     * @param  int $timeframe Number of hours to check (default 24 hours from now). (optional)
     * @param  int $hours How many hours in row do you need the device turned on? (optional)
     *
     * @throws \OpenAPI\Client\ApiException on non-2xx response
     * @throws \InvalidArgumentException
     * @return array of bool, HTTP status code, HTTP response headers (array of strings)
     */
    public function gsiBesthourWithHttpInfo($zip = null, $key = null, $timeframe = null, $hours = null)
    {
        $request = $this->gsiBesthourRequest($zip, $key, $timeframe, $hours);

        try {
            $options = $this->createHttpClientOption();
            try {
                $response = $this->client->send($request, $options);
            } catch (RequestException $e) {
                throw new ApiException(
                    "[{$e->getCode()}] {$e->getMessage()}",
                    (int) $e->getCode(),
                    $e->getResponse() ? $e->getResponse()->getHeaders() : null,
                    $e->getResponse() ? (string) $e->getResponse()->getBody() : null
                );
            }

            $statusCode = $response->getStatusCode();

            if ($statusCode < 200 || $statusCode > 299) {
                throw new ApiException(
                    sprintf(
                        '[%d] Error connecting to the API (%s)',
                        $statusCode,
                        (string) $request->getUri()
                    ),
                    $statusCode,
                    $response->getHeaders(),
                    (string) $response->getBody()
                );
            }

            switch($statusCode) {
                case 200:
                    if ('bool' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                    }

                    return [
                        ObjectSerializer::deserialize($content, 'bool', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
            }

            $returnType = 'bool';
            if ($returnType === '\SplFileObject') {
                $content = $response->getBody(); //stream goes to serializer
            } else {
                $content = (string) $response->getBody();
            }

            return [
                ObjectSerializer::deserialize($content, $returnType, []),
                $response->getStatusCode(),
                $response->getHeaders()
            ];

        } catch (ApiException $e) {
            switch ($e->getCode()) {
                case 200:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        'bool',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
            }
            throw $e;
        }
    }

    /**
     * Operation gsiBesthourAsync
     *
     * Get best hour (with most regional green energy) in a given timeframe.
     *
     * @param  string $zip Zipcode (Postleitzahl) of a city in Germany. (optional)
     * @param  string $key Any valid Stromkonto account (address). (optional)
     * @param  int $timeframe Number of hours to check (default 24 hours from now). (optional)
     * @param  int $hours How many hours in row do you need the device turned on? (optional)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function gsiBesthourAsync($zip = null, $key = null, $timeframe = null, $hours = null)
    {
        return $this->gsiBesthourAsyncWithHttpInfo($zip, $key, $timeframe, $hours)
            ->then(
                function ($response) {
                    return $response[0];
                }
            );
    }

    /**
     * Operation gsiBesthourAsyncWithHttpInfo
     *
     * Get best hour (with most regional green energy) in a given timeframe.
     *
     * @param  string $zip Zipcode (Postleitzahl) of a city in Germany. (optional)
     * @param  string $key Any valid Stromkonto account (address). (optional)
     * @param  int $timeframe Number of hours to check (default 24 hours from now). (optional)
     * @param  int $hours How many hours in row do you need the device turned on? (optional)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function gsiBesthourAsyncWithHttpInfo($zip = null, $key = null, $timeframe = null, $hours = null)
    {
        $returnType = 'bool';
        $request = $this->gsiBesthourRequest($zip, $key, $timeframe, $hours);

        return $this->client
            ->sendAsync($request, $this->createHttpClientOption())
            ->then(
                function ($response) use ($returnType) {
                    if ($returnType === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                    }

                    return [
                        ObjectSerializer::deserialize($content, $returnType, []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                },
                function ($exception) {
                    $response = $exception->getResponse();
                    $statusCode = $response->getStatusCode();
                    throw new ApiException(
                        sprintf(
                            '[%d] Error connecting to the API (%s)',
                            $statusCode,
                            $exception->getRequest()->getUri()
                        ),
                        $statusCode,
                        $response->getHeaders(),
                        (string) $response->getBody()
                    );
                }
            );
    }

    /**
     * Create request for operation 'gsiBesthour'
     *
     * @param  string $zip Zipcode (Postleitzahl) of a city in Germany. (optional)
     * @param  string $key Any valid Stromkonto account (address). (optional)
     * @param  int $timeframe Number of hours to check (default 24 hours from now). (optional)
     * @param  int $hours How many hours in row do you need the device turned on? (optional)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Psr7\Request
     */
    public function gsiBesthourRequest($zip = null, $key = null, $timeframe = null, $hours = null)
    {

        $resourcePath = '/gsi/bestHour';
        $formParams = [];
        $queryParams = [];
        $headerParams = [];
        $httpBody = '';
        $multipart = false;

        // query params
        if ($zip !== null) {
            if('form' === 'form' && is_array($zip)) {
                foreach($zip as $key => $value) {
                    $queryParams[$key] = $value;
                }
            }
            else {
                $queryParams['zip'] = $zip;
            }
        }
        // query params
        if ($key !== null) {
            if('form' === 'form' && is_array($key)) {
                foreach($key as $key => $value) {
                    $queryParams[$key] = $value;
                }
            }
            else {
                $queryParams['key'] = $key;
            }
        }
        // query params
        if ($timeframe !== null) {
            if('form' === 'form' && is_array($timeframe)) {
                foreach($timeframe as $key => $value) {
                    $queryParams[$key] = $value;
                }
            }
            else {
                $queryParams['timeframe'] = $timeframe;
            }
        }
        // query params
        if ($hours !== null) {
            if('form' === 'form' && is_array($hours)) {
                foreach($hours as $key => $value) {
                    $queryParams[$key] = $value;
                }
            }
            else {
                $queryParams['hours'] = $hours;
            }
        }




        if ($multipart) {
            $headers = $this->headerSelector->selectHeadersForMultipart(
                ['application/json']
            );
        } else {
            $headers = $this->headerSelector->selectHeaders(
                ['application/json'],
                []
            );
        }

        // for model (json/xml)
        if (count($formParams) > 0) {
            if ($multipart) {
                $multipartContents = [];
                foreach ($formParams as $formParamName => $formParamValue) {
                    $formParamValueItems = is_array($formParamValue) ? $formParamValue : [$formParamValue];
                    foreach ($formParamValueItems as $formParamValueItem) {
                        $multipartContents[] = [
                            'name' => $formParamName,
                            'contents' => $formParamValueItem
                        ];
                    }
                }
                // for HTTP post (form)
                $httpBody = new MultipartStream($multipartContents);

            } elseif ($headers['Content-Type'] === 'application/json') {
                $httpBody = \GuzzleHttp\json_encode($formParams);

            } else {
                // for HTTP post (form)
                $httpBody = \GuzzleHttp\Psr7\build_query($formParams);
            }
        }


        $defaultHeaders = [];
        if ($this->config->getUserAgent()) {
            $defaultHeaders['User-Agent'] = $this->config->getUserAgent();
        }

        $headers = array_merge(
            $defaultHeaders,
            $headerParams,
            $headers
        );

        $query = \GuzzleHttp\Psr7\build_query($queryParams);
        return new Request(
            'GET',
            $this->config->getHost() . $resourcePath . ($query ? "?{$query}" : ''),
            $headers,
            $httpBody
        );
    }

    /**
     * Create http client option
     *
     * @throws \RuntimeException on file opening failure
     * @return array of http client options
     */
    protected function createHttpClientOption()
    {
        $options = [];
        if ($this->config->getDebug()) {
            $options[RequestOptions::DEBUG] = fopen($this->config->getDebugFile(), 'a');
            if (!$options[RequestOptions::DEBUG]) {
                throw new \RuntimeException('Failed to open the debug file: ' . $this->config->getDebugFile());
            }
        }

        return $options;
    }
}
