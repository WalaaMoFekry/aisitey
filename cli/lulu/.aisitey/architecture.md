# Architecture Context

## Stack

| Layer | Technology | Role |
| --- | --- | --- |
| Framework | nextjs | Application framework |
| UI | [UI library] | User interface |
| Database | [Database] | Data storage |

## System Boundaries

- `folder/` — responsibility

## Application Architecture

### Presentation Layer
- Rendering pages and UI

### Application Layer
- Validating incoming data
- Applying business rules

### Data Layer
- Database access

## Core Domain Model

### Entity One
Represents [what it is].

Contains:
- [field]

Related to:
- [relationship]

## Auth and Access Model

- Users authenticate through [provider].
- Protected routes require authentication.

## Data Integrity Rules

1. Every [entity] belongs to an authenticated user.
2. Every [child entity] belongs to a valid [parent entity].

## Invariants

1. Client components never access the database directly.
2. Authentication is enforced on every protected server operation.
