"""
    Corrently.io

    *Corrently - from italian corrente, which is energy* # Introduction The Corrently ecosystem gets maintained by [STROMDAO GmbH](https://www.stromdao.de/) to support green energy services for prosumers, grid operators, regulators, integrators or any other party with an emerging need of consensus driven management. As the [energy product Corrently](https://www.corrently.de/) got first launched in Germany parts of this documentation provide simple translations for better understanding. [Released SKDs for Download](https://github.com/energychain/corrently-api/releases)   # noqa: E501

    The version of the OpenAPI document: 2.0.0
    Contact: dev@stromdao.com
    Generated by: https://openapi-generator.tech
"""


import unittest

import openapi_client
from openapi_client.api.ocpp_api import OcppApi  # noqa: E501


class TestOcppApi(unittest.TestCase):
    """OcppApi unit test stubs"""

    def setUp(self):
        self.api = OcppApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_ocpp_sessions(self):
        """Test case for ocpp_sessions

        Returns lastSession info of OCCP Cloud service for clearing in corrently ecosystem. Might be tested via [OCPP cloud simulator](https://ocpp.corrently.cloud).  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()