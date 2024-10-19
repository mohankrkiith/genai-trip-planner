/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { configureGenkit } from '@genkit-ai/core';
import { dotprompt } from '@genkit-ai/dotprompt';
import { firebase } from '@genkit-ai/firebase';
import { vertexAI } from '@genkit-ai/vertexai';

const firebaseConfig = {
  apiKey: "AIzaSyDjT9JvEdFI2oOegP261s_4XzNwEePwack",
  authDomain: "genai-trip-planner-7b1e4.firebaseapp.com",
  projectId: "genai-trip-planner-7b1e4",
  storageBucket: "genai-trip-planner-7b1e4.appspot.com",
  messagingSenderId: "282473623812",
  appId: "1:282473623812:web:c99ac7e23a1abf7747e051"
};

export const getProjectId = () => {
  return firebaseConfig.projectId;
};

export const config = configureGenkit({
  plugins: [
    firebase({
      projectId: getProjectId(),
      traceStore: { collection: 'traceStore' },
      flowStateStore: { collection: 'flowTraceStore' },
    }),
    vertexAI({
      projectId: getProjectId(),
      location: 'us-central1',
    }),
    dotprompt(),
  ],
  flowStateStore: 'firebase',
  traceStore: 'firebase',
  enableTracingAndMetrics: true,
  logLevel: 'debug',
  // promptDir: join(process.cwd(), 'public', 'prompts'), -- not working
});
