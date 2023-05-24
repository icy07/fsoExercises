```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Status Code 201
    deactivate server

	 Note right of browser: Request Payload: {content: "2", date: "2023-05-24T16:20:59.013Z"}
```
