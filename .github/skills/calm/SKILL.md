---
name: calm
description: 'Guides context-first, respectful SDLC work using CALM; use for project changes and FDE delivery - Brought to you by CALM/CALM'
---

# CALM

CALM (Calm Agents Lifecycle Management) guides agents and humans through
composed, controlled, and well-understood software delivery. Apply it across
research, planning, implementation, verification, deployment, and operations,
especially in unfamiliar customer environments and Forward Deployed Engineer
engagements.

The goal is not to prevent progress. The goal is to make progress fit the
organization, remain traceable, and have a credible path to managed production.

## Prerequisites

No software installation is required. Use the project and organizational sources
available in the execution environment, including documentation, collaboration
systems, project management tools, policies, source code, and human contacts.

## Quick Start

For every request:

1. Keep CALM: pause before acting and identify the requested outcome, scope,
   affected systems, and potential risk.
2. Respect: learn the project's existing policies, decisions, conventions,
   ownership, and current state.
3. Refer: ask the appropriate person or consult an authoritative source when a
   material requirement cannot be established.
4. Inform: state the intended action, impact, assumptions, and validation before
   making changes. Leave room for feedback in proportion to the risk.
5. Act carefully: make the smallest traceable change that satisfies the request
   and follows local practice.
6. Verify: run relevant checks and compare the result with the stated outcome.
7. Document peacefully: record decisions, departures, evidence, and remaining
   risks clearly and without noise.

## Source Precedence

Resolve requirements in this order:

1. Explicit user requirements and approved organizational policy
2. Repository instructions, specifications, architecture decisions, and
   established conventions
3. Team-level standards and approved overrides
4. Authoritative project sources and responsible humans
5. The defaults in this skill

Do not replace a known local decision with a CALM default. When sources conflict,
surface the conflict and refer it to the appropriate owner before taking a
hard-to-reverse or high-impact action.

## Context Review

Start with the highest-level authoritative context available. Prefer the project
wiki, knowledge base, collaboration workspace, specifications, architecture
records, and recent project-management activity before relying on source-code
inference.

Review only sources relevant to the requested work. Establish:

* The project's purpose, lifecycle stage, owners, and intended users
* The requested outcome and acceptance criteria
* Applicable organizational, security, compliance, and delivery policies
* Current architecture, technology choices, conventions, and active work
* Dependencies, operational ownership, and the path to Day 2 support
* The validation and documentation expected for this kind of change

If project-level context is unavailable, refer to the user or responsible team.
Use codebase inference only for facts the code can establish, label assumptions,
and do not present inferred organizational policy as fact.

## Referral Rules

Refer when missing or conflicting information could materially alter security,
compliance, data handling, architecture, cost, production operations, ownership,
or user experience.

Ask focused questions that include:

* What was checked
* What remains unknown or contradictory
* Why the answer affects the work
* A recommended option or default when appropriate

Do not block low-risk, reversible discovery on information that is unnecessary at
that stage. Never invent policy, approval, or stakeholder agreement.

## Informing People

Before side effects, provide a concise notice covering:

* The action and intended result
* The files, systems, or users likely to be affected
* Material assumptions and departures from established practice
* The planned validation

Match the communication path to project preferences. Some teams inform broadly;
others use assigned owners. Require explicit confirmation before destructive,
irreversible, production, security-sensitive, or materially costly actions.

After the work, report what changed, what was verified, unresolved risks, and any
owner action needed. Distinguish observed facts from assumptions and proposals.

## Domain Checks

Use the applicable checks below during context review. Treat them as questions to
answer from local sources, not as assumptions.

### General

* Specification framework and change-management workflow
* Security policy, data-handling rules, and approval requirements
* Ownership, review expectations, traceability, and documentation location

### Front End

* Design system, style guide, accessibility standard, and supported devices
* Approved framework, runtime, package manager, browser matrix, and test strategy
* User journeys, localization, analytics, privacy, and performance expectations

### Data

* Database paradigm, approved products, and common data model
* Tenancy and isolation model
* Data classification, privacy, residency, retention, and deletion requirements
* Naming, audit fields, encryption, backup, and recovery standards

### Back End

* Approved language, framework, runtime, and API style
* Identity, authorization, secrets, and network requirements
* Serialization, naming, validation, rate limiting, timeout, and resilience rules
* Container, base-image, logging, redaction, observability, and health standards

### Deployment

* Approved infrastructure-as-code and CI/CD platforms
* State storage, locking, landing-zone, account, subscription, and region rules
* Resource tags, cost ownership, networking, DNS, and private connectivity
* Pipeline identity, secret injection, compliance scanning, and artifact registry
* Environment promotion, approval gates, rollback, and operational handoff

Confirm whether an approved team-level override changes any organizational rule.

## Defaults

Use these only when no user requirement, organizational policy, repository
convention, or authoritative project decision applies. Record material departures
and their rationale in the specification or an architecture decision record.

### General Defaults

* Use OpenSpec for specification-driven changes. Follow `explore`, `propose`,
  `apply`, `verify`, and `archive`. Prepare a proposal, specifications, design
  notes when needed, and an executable task list before implementation.
* Apply secure-by-default practices: least privilege, dependency and secret
  scanning, protected branches, peer review, and threat modeling for
  security-sensitive changes. Never commit credentials or customer data.
* Keep changes small and traceable. Link requirements, implementation tasks,
  tests, and verification evidence.

### Front-End Defaults

* Use the repository design system and accessibility guidance. When none exists,
  use WCAG 2.2 AA, semantic HTML, keyboard navigation, visible focus states, and
  responsive layouts.
* For a new client-rendered application, prefer TypeScript, React, Vite, the
  current active Node.js LTS release, and the repository package manager.
* Prefer framework-native state and data fetching. Add a state library only when
  application-wide complexity requires one.
* Test user-visible behavior with component tests and a small set of end-to-end
  tests for critical journeys.

### Data Defaults

* Prefer PostgreSQL and a relational model for transactional systems. Select a
  specialized store only when access patterns justify it.
* Prefer shared infrastructure with tenant-scoped rows, mandatory tenant keys,
  and row-level security where supported. Use separate schemas or databases for
  regulatory or high-isolation needs.
* Classify data as public, internal, confidential, or restricted. Treat personal,
  authentication, payment, health, and customer content as restricted unless an
  approved policy says otherwise.
* Store data in the required region. Otherwise, use the deployment region,
  document cross-region transfers, and use UTC timestamps.
* Define retention and deletion before collection. In the absence of another
  requirement, retain operational logs for 30 days and backups for 35 days.
  Automate expiry and verify deletion.
* Use `snake_case`, plural table names, primary keys named `id`, explicit foreign
  keys named `<entity>_id`, and UTC ISO 8601 at system boundaries.
* Encrypt data in transit with TLS 1.2 or later and at rest with a managed key
  service. Use customer-managed keys only when required.
* Reuse an existing common data model. Otherwise, define bounded, versioned
  domain models rather than a premature universal model.
* Include `created_at` and `updated_at` UTC timestamps on mutable records. Add
  actor, soft-deletion, and concurrency fields when the requirements call for
  them.

### Back-End Defaults

* Follow the repository language and framework. For a new service, prefer the
  current active Node.js LTS release, TypeScript, and a maintained framework with
  validation, observability, and testing support.
* Use OpenID Connect for authentication and OAuth 2.0 for authorization. Prefer
  short-lived tokens, authorization code with PKCE for user-facing clients, and
  workload identity for service-to-service access.
* Store secrets in an approved managed secret store, inject them at runtime, and
  exclude them from source control, images, logs, and persistent environment
  files.
* Keep services private by default. Expose required ingress through a managed
  gateway and use private endpoints for managed dependencies where available.
* Prefer versioned REST APIs documented with OpenAPI. Use GraphQL or gRPC only
  when their access or latency requirements justify the operational cost.
* Use UTF-8 JSON, `camelCase` properties, UTC ISO 8601 timestamps, stable error
  codes, and consistent pagination and filtering.
* Apply configurable per-client rate limits, honor `Retry-After`, use bounded
  exponential backoff with jitter, set remote-call timeouts, and add circuit
  breakers for repeated dependency failures.
* Build minimal non-root OCI images from pinned, vendor-supported base images.
  Generate an SBOM and scan dependencies and images.
* Emit structured JSON logs with timestamps, severity, service, environment,
  trace identifiers, and stable event names. Redact secrets and restricted data.
* Provide separate `/healthz/live` and `/healthz/ready` endpoints without secrets
  or dependency details.

### Deployment Defaults

* Prefer Terraform or OpenTofu for cloud-neutral infrastructure. Use a
  cloud-native framework when it materially improves support and matches
  organizational standards.
* Store state in an encrypted remote backend with versioning, locking, restricted
  access, and recovery procedures. Never commit state files.
* Prefer GitHub Actions for repositories hosted on GitHub. Pin third-party actions
  to immutable commit hashes and use reusable workflows for shared policy.
* Use approved landing zones, accounts, subscriptions, projects, regions, and
  organizational units. Treat policy-as-code controls as mandatory.
* Tag resources with `application`, `environment`, `owner`, `costCenter`,
  `dataClassification`, and `managedBy`, plus locally required tags.
* Prefer private connectivity for databases, secret stores, and internal
  services. Manage network and DNS rules through infrastructure as code.
* Use workload identity federation and short-lived CI/CD credentials. Do not
  store long-lived cloud credentials as pipeline secrets.
* Run formatting, validation, policy, security, and cost checks for every
  infrastructure change. Prefer Checkov for cross-platform policy scanning and
  include framework-native validation.
* Publish packages and images to an approved private registry with immutability,
  scanning, retention, provenance, and signing.
* Promote the same immutable artifact across environments. Require automated
  checks before promotion, explicit production approval, and tested rollback or
  roll-forward procedures.

## Completion Check

Before declaring work complete, confirm that:

* Material context came from authoritative sources or is clearly marked unknown
* Local policy and conventions took precedence over skill defaults
* Relevant people were informed and required approvals were obtained
* The change is scoped, traceable, and has a credible Day 2 owner
* Security, privacy, accessibility, operations, and rollback were considered as
  applicable
* Acceptance criteria and relevant tests or checks passed
* Decisions, departures, verification evidence, and remaining risks were recorded

## Troubleshooting

### No Project Documentation Is Available

Refer to the user or project owner for the minimum material context. Continue only
with low-risk discovery, clearly labeling inferences and unknowns.

### Policies Conflict

Describe the conflicting sources and their impact, recommend a resolution, and
ask the responsible owner to decide. Do not silently choose the most convenient
rule.

### Urgent Work Limits Consultation

State the urgency, scope the action to the smallest reversible intervention,
preserve evidence, avoid irreversible decisions, and record the follow-up needed
to restore the normal process.

### A Default Does Not Fit

Use the better-supported local choice. Record why the default was unsuitable and
how the selected approach meets the governing requirements.

> Brought to you by CALM/CALM
