"""
    Corrently.io

    *Corrently - from italian corrente, which is energy* # Introduction The Corrently ecosystem gets maintained by [STROMDAO GmbH](https://www.stromdao.de/) to support green energy services for prosumers, grid operators, regulators, integrators or any other party with an emerging need of consensus driven management. As the [energy product Corrently](https://www.corrently.de/) got first launched in Germany parts of this documentation provide simple translations for better understanding. [Released SKDs for Download](https://github.com/energychain/corrently-api/releases)   # noqa: E501

    The version of the OpenAPI document: 2.0.0
    Contact: dev@stromdao.com
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from openapi_client.api_client import ApiClient, Endpoint as _Endpoint
from openapi_client.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from openapi_client.model.balance import Balance
from openapi_client.model.inline_object import InlineObject
from openapi_client.model.inline_object1 import InlineObject1
from openapi_client.model.inline_object2 import InlineObject2
from openapi_client.model.inline_response200 import InlineResponse200


class StromkontoLedgerApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

        def __prepare_transaction(
            self,
            inline_object2,
            **kwargs
        ):
            """Prepare Transaction  # noqa: E501

            Prepares and inques a transaction (transfer) between two accounts (Stromkonten). This might be used to send any balanced entity. Using this endpoint will only prepare the transaction and enques it for signing and countersigning. This is done from within the user UI using validation process. Note: This API method does not validate any transations. In other words authentication, authorization, validation and actual transfer of value is done using a smart contract during processing in the energy blockchain.   # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.prepare_transaction(inline_object2, async_req=True)
            >>> result = thread.get()

            Args:
                inline_object2 (InlineObject2):

            Keyword Args:
                _return_http_data_only (bool): response data without head status
                    code and headers. Default is True.
                _preload_content (bool): if False, the urllib3.HTTPResponse object
                    will be returned without reading/decoding response data.
                    Default is True.
                _request_timeout (float/tuple): timeout setting for this request. If one
                    number provided, it will be total request timeout. It can also
                    be a pair (tuple) of (connection, read) timeouts.
                    Default is None.
                _check_input_type (bool): specifies if type checking
                    should be done one the data sent to the server.
                    Default is True.
                _check_return_type (bool): specifies if type checking
                    should be done one the data received from the server.
                    Default is True.
                _host_index (int/None): specifies the index of the server
                    that we want to use.
                    Default is read from the configuration.
                async_req (bool): execute request asynchronously

            Returns:
                None
                    If the method is called asynchronously, returns the request
                    thread.
            """
            kwargs['async_req'] = kwargs.get(
                'async_req', False
            )
            kwargs['_return_http_data_only'] = kwargs.get(
                '_return_http_data_only', True
            )
            kwargs['_preload_content'] = kwargs.get(
                '_preload_content', True
            )
            kwargs['_request_timeout'] = kwargs.get(
                '_request_timeout', None
            )
            kwargs['_check_input_type'] = kwargs.get(
                '_check_input_type', True
            )
            kwargs['_check_return_type'] = kwargs.get(
                '_check_return_type', True
            )
            kwargs['_host_index'] = kwargs.get('_host_index')
            kwargs['inline_object2'] = \
                inline_object2
            return self.call_with_http_info(**kwargs)

        self.prepare_transaction = _Endpoint(
            settings={
                'response_type': None,
                'auth': [],
                'endpoint_path': '/stromkonto/prepareTransaction',
                'operation_id': 'prepare_transaction',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'inline_object2',
                ],
                'required': [
                    'inline_object2',
                ],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'inline_object2':
                        (InlineObject2,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'inline_object2': 'body',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [],
                'content_type': [
                    'application/json'
                ]
            },
            api_client=api_client,
            callable=__prepare_transaction
        )

        def __stromkonto_balances(
            self,
            **kwargs
        ):
            """Balances  # noqa: E501

            Stromkonto represents a core component of the Corrently Ecosystem. It is a ledger for green energy related transactions and gets heavily used by the public Web-UI on www.stromkonto.net . Beside of some decoration and reformating operations all data is backed by the [Energychain blockchain](https://github.com/energychain/) to provide consensus of balances and transactions. Use this API Endppoint if you prefere not to work with low level Distributed Ledger Technology (Blockchain).   # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.stromkonto_balances(async_req=True)
            >>> result = thread.get()


            Keyword Args:
                account (str): Ethereum style address referencing a valid account (AKA Stromkonto).. [optional]
                _return_http_data_only (bool): response data without head status
                    code and headers. Default is True.
                _preload_content (bool): if False, the urllib3.HTTPResponse object
                    will be returned without reading/decoding response data.
                    Default is True.
                _request_timeout (float/tuple): timeout setting for this request. If one
                    number provided, it will be total request timeout. It can also
                    be a pair (tuple) of (connection, read) timeouts.
                    Default is None.
                _check_input_type (bool): specifies if type checking
                    should be done one the data sent to the server.
                    Default is True.
                _check_return_type (bool): specifies if type checking
                    should be done one the data received from the server.
                    Default is True.
                _host_index (int/None): specifies the index of the server
                    that we want to use.
                    Default is read from the configuration.
                async_req (bool): execute request asynchronously

            Returns:
                [Balance]
                    If the method is called asynchronously, returns the request
                    thread.
            """
            kwargs['async_req'] = kwargs.get(
                'async_req', False
            )
            kwargs['_return_http_data_only'] = kwargs.get(
                '_return_http_data_only', True
            )
            kwargs['_preload_content'] = kwargs.get(
                '_preload_content', True
            )
            kwargs['_request_timeout'] = kwargs.get(
                '_request_timeout', None
            )
            kwargs['_check_input_type'] = kwargs.get(
                '_check_input_type', True
            )
            kwargs['_check_return_type'] = kwargs.get(
                '_check_return_type', True
            )
            kwargs['_host_index'] = kwargs.get('_host_index')
            return self.call_with_http_info(**kwargs)

        self.stromkonto_balances = _Endpoint(
            settings={
                'response_type': ([Balance],),
                'auth': [],
                'endpoint_path': '/stromkonto/balances',
                'operation_id': 'stromkonto_balances',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'account',
                ],
                'required': [],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'account':
                        (str,),
                },
                'attribute_map': {
                    'account': 'account',
                },
                'location_map': {
                    'account': 'query',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [],
            },
            api_client=api_client,
            callable=__stromkonto_balances
        )

        def __stromkonto_choices(
            self,
            **kwargs
        ):
            """Selectable Choices for customer  # noqa: E501

            Signable choices (contract changes) for customer.   # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.stromkonto_choices(async_req=True)
            >>> result = thread.get()


            Keyword Args:
                account (str): Ethereum style address referencing a valid account alias (never use Stromkonto directly!).. [optional]
                _return_http_data_only (bool): response data without head status
                    code and headers. Default is True.
                _preload_content (bool): if False, the urllib3.HTTPResponse object
                    will be returned without reading/decoding response data.
                    Default is True.
                _request_timeout (float/tuple): timeout setting for this request. If one
                    number provided, it will be total request timeout. It can also
                    be a pair (tuple) of (connection, read) timeouts.
                    Default is None.
                _check_input_type (bool): specifies if type checking
                    should be done one the data sent to the server.
                    Default is True.
                _check_return_type (bool): specifies if type checking
                    should be done one the data received from the server.
                    Default is True.
                _host_index (int/None): specifies the index of the server
                    that we want to use.
                    Default is read from the configuration.
                async_req (bool): execute request asynchronously

            Returns:
                [Balance]
                    If the method is called asynchronously, returns the request
                    thread.
            """
            kwargs['async_req'] = kwargs.get(
                'async_req', False
            )
            kwargs['_return_http_data_only'] = kwargs.get(
                '_return_http_data_only', True
            )
            kwargs['_preload_content'] = kwargs.get(
                '_preload_content', True
            )
            kwargs['_request_timeout'] = kwargs.get(
                '_request_timeout', None
            )
            kwargs['_check_input_type'] = kwargs.get(
                '_check_input_type', True
            )
            kwargs['_check_return_type'] = kwargs.get(
                '_check_return_type', True
            )
            kwargs['_host_index'] = kwargs.get('_host_index')
            return self.call_with_http_info(**kwargs)

        self.stromkonto_choices = _Endpoint(
            settings={
                'response_type': ([Balance],),
                'auth': [],
                'endpoint_path': '/stromkonto/choices',
                'operation_id': 'stromkonto_choices',
                'http_method': 'GET',
                'servers': None,
            },
            params_map={
                'all': [
                    'account',
                ],
                'required': [],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'account':
                        (str,),
                },
                'attribute_map': {
                    'account': 'account',
                },
                'location_map': {
                    'account': 'query',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [],
            },
            api_client=api_client,
            callable=__stromkonto_choices
        )

        def __stromkonto_login(
            self,
            inline_object1,
            **kwargs
        ):
            """Login (via Mail)  # noqa: E501

            Sends a mail to a given email address to login this user. This function makes life a bit easier in order to not having to deal with private key protection on the user side as a shared key is used to sign transactions onbehalf of a particular account.  However viewing consensus information (balances) are public and *might move* from account to account without prior notification. Best practice for third party uses is to always start a session with the login RESP call and only create a user in case the response indicates an `unregistered` status.   # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.stromkonto_login(inline_object1, async_req=True)
            >>> result = thread.get()

            Args:
                inline_object1 (InlineObject1):

            Keyword Args:
                _return_http_data_only (bool): response data without head status
                    code and headers. Default is True.
                _preload_content (bool): if False, the urllib3.HTTPResponse object
                    will be returned without reading/decoding response data.
                    Default is True.
                _request_timeout (float/tuple): timeout setting for this request. If one
                    number provided, it will be total request timeout. It can also
                    be a pair (tuple) of (connection, read) timeouts.
                    Default is None.
                _check_input_type (bool): specifies if type checking
                    should be done one the data sent to the server.
                    Default is True.
                _check_return_type (bool): specifies if type checking
                    should be done one the data received from the server.
                    Default is True.
                _host_index (int/None): specifies the index of the server
                    that we want to use.
                    Default is read from the configuration.
                async_req (bool): execute request asynchronously

            Returns:
                InlineResponse200
                    If the method is called asynchronously, returns the request
                    thread.
            """
            kwargs['async_req'] = kwargs.get(
                'async_req', False
            )
            kwargs['_return_http_data_only'] = kwargs.get(
                '_return_http_data_only', True
            )
            kwargs['_preload_content'] = kwargs.get(
                '_preload_content', True
            )
            kwargs['_request_timeout'] = kwargs.get(
                '_request_timeout', None
            )
            kwargs['_check_input_type'] = kwargs.get(
                '_check_input_type', True
            )
            kwargs['_check_return_type'] = kwargs.get(
                '_check_return_type', True
            )
            kwargs['_host_index'] = kwargs.get('_host_index')
            kwargs['inline_object1'] = \
                inline_object1
            return self.call_with_http_info(**kwargs)

        self.stromkonto_login = _Endpoint(
            settings={
                'response_type': (InlineResponse200,),
                'auth': [],
                'endpoint_path': '/stromkonto/login',
                'operation_id': 'stromkonto_login',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'inline_object1',
                ],
                'required': [
                    'inline_object1',
                ],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'inline_object1':
                        (InlineObject1,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'inline_object1': 'body',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [
                    'application/json'
                ]
            },
            api_client=api_client,
            callable=__stromkonto_login
        )

        def __stromkonto_register(
            self,
            inline_object,
            **kwargs
        ):
            """Register (new Stromkonto)  # noqa: E501

            Calling this method with an unregistered (new) email will create a new account (Stromkonto) with all balances having a value of `0` and no transaction history. In addition some basic properties like region and zipcode are set to allow further operation of account.   # noqa: E501
            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.stromkonto_register(inline_object, async_req=True)
            >>> result = thread.get()

            Args:
                inline_object (InlineObject):

            Keyword Args:
                _return_http_data_only (bool): response data without head status
                    code and headers. Default is True.
                _preload_content (bool): if False, the urllib3.HTTPResponse object
                    will be returned without reading/decoding response data.
                    Default is True.
                _request_timeout (float/tuple): timeout setting for this request. If one
                    number provided, it will be total request timeout. It can also
                    be a pair (tuple) of (connection, read) timeouts.
                    Default is None.
                _check_input_type (bool): specifies if type checking
                    should be done one the data sent to the server.
                    Default is True.
                _check_return_type (bool): specifies if type checking
                    should be done one the data received from the server.
                    Default is True.
                _host_index (int/None): specifies the index of the server
                    that we want to use.
                    Default is read from the configuration.
                async_req (bool): execute request asynchronously

            Returns:
                None
                    If the method is called asynchronously, returns the request
                    thread.
            """
            kwargs['async_req'] = kwargs.get(
                'async_req', False
            )
            kwargs['_return_http_data_only'] = kwargs.get(
                '_return_http_data_only', True
            )
            kwargs['_preload_content'] = kwargs.get(
                '_preload_content', True
            )
            kwargs['_request_timeout'] = kwargs.get(
                '_request_timeout', None
            )
            kwargs['_check_input_type'] = kwargs.get(
                '_check_input_type', True
            )
            kwargs['_check_return_type'] = kwargs.get(
                '_check_return_type', True
            )
            kwargs['_host_index'] = kwargs.get('_host_index')
            kwargs['inline_object'] = \
                inline_object
            return self.call_with_http_info(**kwargs)

        self.stromkonto_register = _Endpoint(
            settings={
                'response_type': None,
                'auth': [],
                'endpoint_path': '/stromkonto/register',
                'operation_id': 'stromkonto_register',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'inline_object',
                ],
                'required': [
                    'inline_object',
                ],
                'nullable': [
                ],
                'enum': [
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                },
                'openapi_types': {
                    'inline_object':
                        (InlineObject,),
                },
                'attribute_map': {
                },
                'location_map': {
                    'inline_object': 'body',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [],
                'content_type': [
                    'application/json'
                ]
            },
            api_client=api_client,
            callable=__stromkonto_register
        )
