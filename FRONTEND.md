# Emergency Copilot (Dispatch Copilot)

Bystander-facing, protocol-aware guidance system designed to streamline 911 emergency calls by predicting dispatcher questions using vision AI.

## Technical Core
- **Vision Component**: Extracts high-level observations (vehicles, fire, smoke, weapons, unconscious persons) from a live camera feed.
- **Protocol State Engine**: Models emergency intake as a structured decision process based on standardized EMD (Emergency Medical Dispatch) protocols.
- **Question Prediction Layer**: Determines the most likely next question based on visual cues and the current protocol state.

## Implementation Guidelines
- **UI/UX**: Intentionally minimal. Present exactly ONE predicted question at a time to reduce cognitive load. Include a prominent 'Unsure' or 'Dispatcher moved on' manual override.
- **Model Constraints**: Use lightweight scene understanding models. Prioritize low latency over complex deep analysis to ensure predictions remain relevant in real-time.
- **Data Privacy**: No video or audio should be stored post-call. Architecture should support fine-tuning on anonymized call transcripts or standardized protocols.

## Key Emergency Contexts
- **Motor Vehicle Accidents**: Track number of cars, severity of damage, and whether anyone is leaving the scene.
- **Armed Intrusions**: Identify weapon types and suspect descriptions.
- **Medical/Fire**: Detect unconsciousness, active fire, or smoke levels.

## Critical Considerations
- **No Medical Advice**: The system must NOT provide diagnoses or treatment instructions; it is an information-gathering assistive tool only.
- **Reliability**: If the vision AI confidence is low, the system should default to a "silent" state rather than providing incorrect prompts.