"""
    Corrently.io

    *Corrently - from italian corrente, which is energy* # Introduction The Corrently ecosystem gets maintained by [STROMDAO GmbH](https://www.stromdao.de/) to support green energy services for prosumers, grid operators, regulators, integrators or any other party with an emerging need of consensus driven management. As the [energy product Corrently](https://www.corrently.de/) got first launched in Germany parts of this documentation provide simple translations for better understanding.   # noqa: E501

    The version of the OpenAPI document: 2.0.0
    Contact: dev@stromdao.com
    Generated by: https://openapi-generator.tech
"""


import unittest

import openapi_client
from openapi_client.api.stromkonto__ledger_api import StromkontoLedgerApi  # noqa: E501


class TestStromkontoLedgerApi(unittest.TestCase):
    """StromkontoLedgerApi unit test stubs"""

    def setUp(self):
        self.api = StromkontoLedgerApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_prepare_transaction(self):
        """Test case for prepare_transaction

        Prepare Transaction  # noqa: E501
        """
        pass

    def test_stromkonto_balances(self):
        """Test case for stromkonto_balances

        Balances  # noqa: E501
        """
        pass

    def test_stromkonto_choices(self):
        """Test case for stromkonto_choices

        Selectable Choices for customer  # noqa: E501
        """
        pass

    def test_stromkonto_login(self):
        """Test case for stromkonto_login

        Login (via Mail)  # noqa: E501
        """
        pass

    def test_stromkonto_register(self):
        """Test case for stromkonto_register

        Register (new Stromkonto)  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()