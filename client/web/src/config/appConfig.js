/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const config = {
  region: process.env.REACT_APP_AWS_REGION,
  userPool: process.env.REACT_APP_COGNITO_USERPOOL,
  userPoolBaseUri: process.env.REACT_APP_COGNITO_USERPOOL_BASE_URI,
  clientId: process.env.REACT_APP_CLIENT_ID,
  apiUri: process.env.REACT_APP_API_URI,
  environment: process.env.REACT_APP_ENVIRONMENT,
  awsAccount: process.env.REACT_APP_AWS_ACCOUNT,
  issuer: process.env.REACT_APP_ISSUER || `https://cognito-idp.${process.env.REACT_APP_AWS_REGION}.amazonaws.com/${process.env.REACT_APP_COGNITO_USERPOOL}`,
  scope: process.env.REACT_APP_SCOPE || 'openid profile email'
}

export default config
