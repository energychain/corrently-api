<?php
/**
 * TariffPriceAPIApi
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
 * TariffPriceAPIApi Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class TariffPriceAPIApi
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
     * Operation tariffSLPH0
     *
     * Energy Tariff information
     *
     * @param  string $zipcode Zipcode (Postzleitzahl) of a city in Germany. (optional)
     *
     * @throws \OpenAPI\Client\ApiException on non-2xx response
     * @throws \InvalidArgumentException
     * @return \OpenAPI\Client\Model\Tariffh0[]
     */
    public function tariffSLPH0($zipcode = null)
    {
        list($response) = $this->tariffSLPH0WithHttpInfo($zipcode);
        return $response;
    }

    /**
     * Operation tariffSLPH0WithHttpInfo
     *
     * Energy Tariff information
     *
     * @param  string $zipcode Zipcode (Postzleitzahl) of a city in Germany. (optional)
     *
     * @throws \OpenAPI\Client\ApiException on non-2xx response
     * @throws \InvalidArgumentException
     * @return array of \OpenAPI\Client\Model\Tariffh0[], HTTP status code, HTTP response headers (array of strings)
     */
    public function tariffSLPH0WithHttpInfo($zipcode = null)
    {
        $request = $this->tariffSLPH0Request($zipcode);

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
                    if ('\OpenAPI\Client\Model\Tariffh0[]' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\OpenAPI\Client\Model\Tariffh0[]', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
            }

            $returnType = '\OpenAPI\Client\Model\Tariffh0[]';
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
                        '\OpenAPI\Client\Model\Tariffh0[]',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
            }
            throw $e;
        }
    }

    /**
     * Operation tariffSLPH0Async
     *
     * Energy Tariff information
     *
     * @param  string $zipcode Zipcode (Postzleitzahl) of a city in Germany. (optional)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function tariffSLPH0Async($zipcode = null)
    {
        return $this->tariffSLPH0AsyncWithHttpInfo($zipcode)
            ->then(
                function ($response) {
                    return $response[0];
                }
            );
    }

    /**
     * Operation tariffSLPH0AsyncWithHttpInfo
     *
     * Energy Tariff information
     *
     * @param  string $zipcode Zipcode (Postzleitzahl) of a city in Germany. (optional)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function tariffSLPH0AsyncWithHttpInfo($zipcode = null)
    {
        $returnType = '\OpenAPI\Client\Model\Tariffh0[]';
        $request = $this->tariffSLPH0Request($zipcode);

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
     * Create request for operation 'tariffSLPH0'
     *
     * @param  string $zipcode Zipcode (Postzleitzahl) of a city in Germany. (optional)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Psr7\Request
     */
    public function tariffSLPH0Request($zipcode = null)
    {

        $resourcePath = '/tariff/slph0';
        $formParams = [];
        $queryParams = [];
        $headerParams = [];
        $httpBody = '';
        $multipart = false;

        // query params
        if ($zipcode !== null) {
            if('form' === 'form' && is_array($zipcode)) {
                foreach($zipcode as $key => $value) {
                    $queryParams[$key] = $value;
                }
            }
            else {
                $queryParams['zipcode'] = $zipcode;
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
     * Operation tariffcomponents
     *
     * Energy Tariff price components
     *
     * @param  string $zipcode Zipcode (Postzleitzahl) of a city in Germany. (optional)
     * @param  string $email Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time (optional)
     * @param  int $kwha Total amount of energy in kilo-watt-hours per year. (sample 2100) (optional)
     * @param  int $milliseconds If provided all results will be scaled to this timeframe (optional)
     * @param  int $wh If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created. (optional)
     *
     * @throws \OpenAPI\Client\ApiException on non-2xx response
     * @throws \InvalidArgumentException
     * @return \OpenAPI\Client\Model\Componentsh0
     */
    public function tariffcomponents($zipcode = null, $email = null, $kwha = null, $milliseconds = null, $wh = null)
    {
        list($response) = $this->tariffcomponentsWithHttpInfo($zipcode, $email, $kwha, $milliseconds, $wh);
        return $response;
    }

    /**
     * Operation tariffcomponentsWithHttpInfo
     *
     * Energy Tariff price components
     *
     * @param  string $zipcode Zipcode (Postzleitzahl) of a city in Germany. (optional)
     * @param  string $email Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time (optional)
     * @param  int $kwha Total amount of energy in kilo-watt-hours per year. (sample 2100) (optional)
     * @param  int $milliseconds If provided all results will be scaled to this timeframe (optional)
     * @param  int $wh If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created. (optional)
     *
     * @throws \OpenAPI\Client\ApiException on non-2xx response
     * @throws \InvalidArgumentException
     * @return array of \OpenAPI\Client\Model\Componentsh0, HTTP status code, HTTP response headers (array of strings)
     */
    public function tariffcomponentsWithHttpInfo($zipcode = null, $email = null, $kwha = null, $milliseconds = null, $wh = null)
    {
        $request = $this->tariffcomponentsRequest($zipcode, $email, $kwha, $milliseconds, $wh);

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
                    if ('\OpenAPI\Client\Model\Componentsh0' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\OpenAPI\Client\Model\Componentsh0', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
            }

            $returnType = '\OpenAPI\Client\Model\Componentsh0';
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
                        '\OpenAPI\Client\Model\Componentsh0',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
            }
            throw $e;
        }
    }

    /**
     * Operation tariffcomponentsAsync
     *
     * Energy Tariff price components
     *
     * @param  string $zipcode Zipcode (Postzleitzahl) of a city in Germany. (optional)
     * @param  string $email Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time (optional)
     * @param  int $kwha Total amount of energy in kilo-watt-hours per year. (sample 2100) (optional)
     * @param  int $milliseconds If provided all results will be scaled to this timeframe (optional)
     * @param  int $wh If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created. (optional)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function tariffcomponentsAsync($zipcode = null, $email = null, $kwha = null, $milliseconds = null, $wh = null)
    {
        return $this->tariffcomponentsAsyncWithHttpInfo($zipcode, $email, $kwha, $milliseconds, $wh)
            ->then(
                function ($response) {
                    return $response[0];
                }
            );
    }

    /**
     * Operation tariffcomponentsAsyncWithHttpInfo
     *
     * Energy Tariff price components
     *
     * @param  string $zipcode Zipcode (Postzleitzahl) of a city in Germany. (optional)
     * @param  string $email Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time (optional)
     * @param  int $kwha Total amount of energy in kilo-watt-hours per year. (sample 2100) (optional)
     * @param  int $milliseconds If provided all results will be scaled to this timeframe (optional)
     * @param  int $wh If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created. (optional)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function tariffcomponentsAsyncWithHttpInfo($zipcode = null, $email = null, $kwha = null, $milliseconds = null, $wh = null)
    {
        $returnType = '\OpenAPI\Client\Model\Componentsh0';
        $request = $this->tariffcomponentsRequest($zipcode, $email, $kwha, $milliseconds, $wh);

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
     * Create request for operation 'tariffcomponents'
     *
     * @param  string $zipcode Zipcode (Postzleitzahl) of a city in Germany. (optional)
     * @param  string $email Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time (optional)
     * @param  int $kwha Total amount of energy in kilo-watt-hours per year. (sample 2100) (optional)
     * @param  int $milliseconds If provided all results will be scaled to this timeframe (optional)
     * @param  int $wh If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created. (optional)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Psr7\Request
     */
    public function tariffcomponentsRequest($zipcode = null, $email = null, $kwha = null, $milliseconds = null, $wh = null)
    {

        $resourcePath = '/tariff/components';
        $formParams = [];
        $queryParams = [];
        $headerParams = [];
        $httpBody = '';
        $multipart = false;

        // query params
        if ($zipcode !== null) {
            if('form' === 'form' && is_array($zipcode)) {
                foreach($zipcode as $key => $value) {
                    $queryParams[$key] = $value;
                }
            }
            else {
                $queryParams['zipcode'] = $zipcode;
            }
        }
        // query params
        if ($email !== null) {
            if('form' === 'form' && is_array($email)) {
                foreach($email as $key => $value) {
                    $queryParams[$key] = $value;
                }
            }
            else {
                $queryParams['email'] = $email;
            }
        }
        // query params
        if ($kwha !== null) {
            if('form' === 'form' && is_array($kwha)) {
                foreach($kwha as $key => $value) {
                    $queryParams[$key] = $value;
                }
            }
            else {
                $queryParams['kwha'] = $kwha;
            }
        }
        // query params
        if ($milliseconds !== null) {
            if('form' === 'form' && is_array($milliseconds)) {
                foreach($milliseconds as $key => $value) {
                    $queryParams[$key] = $value;
                }
            }
            else {
                $queryParams['milliseconds'] = $milliseconds;
            }
        }
        // query params
        if ($wh !== null) {
            if('form' === 'form' && is_array($wh)) {
                foreach($wh as $key => $value) {
                    $queryParams[$key] = $value;
                }
            }
            else {
                $queryParams['wh'] = $wh;
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
