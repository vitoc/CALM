# CALM skills

> Calm Agents Lifecycle Management

CALM is a clearly defined set of principles designed to complement any SDLC practice to encourage a composed, controlled, and well-understood approach through the use of calm agents.

Calm agents are agents equipped with an understanding of CALM principles through a standard skill package. With this skill, any action, generation or interaction that are performed by the agent (or humans through the agent) will maintain the collective calm of the project.

## CALM principles

* Always keep CALM
* Respect 
* Refer
* Inform
* Document peacefully

## Best for Forward Deployed Engineers

Forward Deployed Engineers often have to work in new customer environments where the above CALM principles are important in order to deliver solutions that can better fit the customer's existing environment and practices.

Why is this important? Many reasons: 

* Increase chance of the solution being sustained by existing teams
* Reduce risk of the solution 
* Better user experience, etc.

It is always easy to implement a greenfield solution ala "bulldozer mode", i.e. just get it done. It is very tempting. After all, it is a MVP and it is more important to show impact either of the time spent or the platform/software being adopted as part of the "on-ramp" to the rapid solutioning capability of the FDE.

However, the time at which the FDE is introduced within an organization many times coincides with the juncture at which it is most important to have a pathway to managed production (Day 2) already figured out.

The FDe often has to navigate these complexities too and it is the goal of the CALM skill(s) in this project help the FDE's agents create solutions that will have a higher chance of succeeding sustainably within an organization's IT / software /SDLC ecosystem.

## What does the principles mean in practice, in the context of an agent with the CALM skill?

Before you do anything, take a deep breath (virtually if you must) and stay CALM.

First, look around you. Understand the nature, state, and characteristics of the project. And RESPECT it. Take it in within your context of execution. First look at the wiki / knowledge / collaboration workspace to get a high-level understanding of the project. If there is a project management tool in place in the project, have a look at the recent tasks. 

> Why is this important? The skill encourages agents (and flags it out if it doesn't) to look at context at the level of the organization / Enterprise. Inspecting the code-base, or documentation alone may not suffice to achieve the objectives of CALM, which is to create solutions that can smoothly ease into production

If you cannot assemble a high-level understanding of the project from project meta tools (no other agents/skills/sources available), you will need to REFER. Ask the human(s)/team in your execution window, or through any communication channel that are available to you. Only resort to codebase inference as a last resort, as the codebase itself may not be clearly documented in the first place, and any assumptions will disrupt the CALM. 

Next, inform the human(s)/team of what you are about to do. Always allow room for feedback and take the feedback into consideration, with respect to CALM, and iterate to a point satisfactory to the human in the loop.

For all human interactions, always remember the principle of Respect. Understand that the project may have communication preferences. Some like everyone to be asked an informed. Some projects prefer only individuals assigned to be asked and informed.

For everything you do. Document peacefully, free from noise. You can be verbose without being noisy. Use references to well-known concepts and ideas. Document clearly and plainly; not to cause alarm, confusion or introduce red herrings; but to present the facts usefully for future work.

## Applicability

The core principles embedded in this CALM skill is applicable to any agents (or humans) in the entire SDLC:

* During the Research, Plan, Implement (RPI) phase.
* For all specialized agent types: Entity generator, Azure DevOps, platform engineering, test, etc.
* It is great for humans too!

## Characteristics tested by this skill

### At the organizational level

#### Generic checks

* Does the organization use a specification framework?
* Any security policy

#### If this is a front-end project / prompt related to front-end

* Check if there is a style guide?
* Preferred front-end stack

#### If this is a data project / prompt related to data

* Any databaes paradigm / database choice policy?
* Any multi-tenancy model in place for database of choice?
* Any data classification (i.e. PII) policies?
* Any localization/resideency preferences?
* Any standards around retention / purging?
* Any naming convention?
* Encryption requirements?
* Existing common data model?
* Adopted standard audit fields, i.e. created_at, updated_at

#### If this is a back-end project / prompt related to back-end

* Any approved language, framework, or runtime policy?
* Any identity and access management (IAM) or authentication standard (e.g., OIDC, OAuth2)?
* Any secrets management policy (e.g., Vault, env vars only)?
* Any network topology or firewall constraints (e.g., VPC, VPN, air-gapped)?
* Any API style guide or protocol standard (e.g., REST, GraphQL, gRPC)?
* Any payload serialization or naming conventions (e.g., camelCase JSON)?
* Any rate limiting, throttling, or circuit-breaking thresholds?
* Any containerisation or base image compliance requirements?
* Any logging standard (e.g., structured JSON) or PII masking rules?
* Any mandatory health check or readiness endpoints (e.g., /healthz)?

#### If this is a deployment project / prompt related to deployment

* Any preferred IaC framework policy (e.g., Terraform, OpenTofu, Ansible, CloudFormation)?
* Any state file management and locking standards (e.g., remote S3 backend with DynamoDB, HashiCorp Cloud)?
* Any approved CI/CD automation platform (e.g., GitHub Actions, GitLab CI, Jenkins)?
* Any cloud provider landing zone or account-vending constraints (e.g., specific AWS OUs, GCP folders)?
* Any resource tagging schema or cost-allocation metadata policies?
* Any network peering, DNS registration, or private endpoint requirements?Any secret-injection standards for CI/CD pipelines (e.g., OIDC federation, short-lived tokens)?
* Any compliance scanning tool mandates for IaC (e.g., Checkov, tflint, Terrascan)?
* Any container registry or artifact repository restrictions (e.g., JFrog Artifactory, AWS ECR)?
* Any environment promotion and approval gates policy (e.g., manual sign-offs for production)?

### At the team level

Are there any allowed team level override for any of the characteristics defined at the organizational level

## Defaults

Use the existing organization policy, repository convention, or user requirement
when one is available. Otherwise, apply the defaults below. Record material
departures and their rationale in the specification or an architecture decision
record (ADR).

> These defaults are also used as de factor answers in the example / test folders as well

### Generic defaults

* Use [OpenSpec](https://openspec.dev/) for specification-driven changes. Follow
	the `explore`, `propose`, `apply`, `verify`, and `archive` workflow. Require a
	proposal, specifications, design notes when needed, and an executable task list
	before implementation.
* Apply secure-by-default engineering practices. Use least privilege, dependency
	and secret scanning, protected branches, peer review, and threat modeling for
	security-sensitive changes. Never commit credentials or customer data.
* Keep changes small and traceable. Link requirements, implementation tasks,
	tests, and verification evidence.

### Front-end defaults

* Follow the repository's design system and accessibility guidance. If none
	exists, use WCAG 2.2 AA, semantic HTML, keyboard navigation, visible focus
	states, and responsive layouts as the baseline.
* Prefer TypeScript, React, and Vite for a new client-rendered application. Use
	the current active LTS release of Node.js and the repository's existing package
	manager.
* Prefer framework-native state and data-fetching features. Add a state library
	only when application-wide state complexity requires one.
* Test user-visible behavior with component tests and a small set of end-to-end
	tests for critical journeys.

### Data defaults

* Prefer a relational model and PostgreSQL for transactional systems. Choose a
	document, graph, time-series, or analytical store only when access patterns
	justify it in the design.
* Prefer shared infrastructure with tenant-scoped rows and mandatory tenant keys.
	Enforce isolation with row-level security where supported. Use separate schemas
	or databases when regulatory or high-isolation requirements demand it.
* Classify data as public, internal, confidential, or restricted. Treat personal,
	authentication, payment, health, and customer content as restricted unless an
	approved policy says otherwise.
* Store data in the region required by the customer or regulation. Default to the
	deployment region, document cross-region transfers, and keep timestamps in UTC.
* Define retention and deletion periods before collecting data. Default operational
	logs to 30 days and backups to 35 days when no legal, recovery, or organizational
	requirement applies. Automate expiry and verify deletion.
* Use `snake_case`, plural table names, singular primary keys named `id`, and
	explicit foreign keys named `<entity>_id`. Use UTC ISO 8601 at system boundaries.
* Encrypt data in transit with TLS 1.2 or later and at rest with a managed key
	service. Use customer-managed keys only when policy or contractual requirements
	call for them.
* Reuse the organization's common data model when one exists. Otherwise, define
	bounded domain models and version contracts; do not create a universal model
	prematurely.
* Include `created_at` and `updated_at` as UTC timestamps on mutable records. Add
	`created_by`, `updated_by`, `deleted_at`, and optimistic concurrency fields when
	auditability, soft deletion, or concurrent writes require them.

### Back-end defaults

* Follow the repository's language and framework. For a new service without other
	constraints, prefer the current active LTS release of TypeScript and Node.js with
	a maintained framework that supports validation, observability, and testing.
* Use OpenID Connect for authentication and OAuth 2.0 authorization. Prefer
	short-lived tokens, authorization code flow with PKCE for user-facing clients,
	and workload identity for service-to-service access.
* Store secrets in the cloud provider's managed secret store or an approved vault.
	Inject them at runtime, rotate them, and keep them out of source control, images,
	logs, and persistent environment files.
* Keep services private by default. Expose only required ingress through a managed
	gateway, deny unrestricted administrative access, and use private endpoints for
	managed dependencies when available.
* Prefer versioned REST APIs documented with OpenAPI. Use GraphQL for client-driven
	aggregation and gRPC for controlled, latency-sensitive service communication
	when those requirements justify the added operational cost.
* Use UTF-8 JSON with `camelCase` property names, ISO 8601 UTC timestamps, stable
	machine-readable error codes, and consistent pagination and filtering.
* Enforce configurable per-client rate limits at the gateway. Honor `Retry-After`,
	use bounded exponential backoff with jitter, apply timeouts to every remote call,
	and add circuit breakers for repeatedly failing dependencies.
* Build minimal, non-root OCI images from pinned, vendor-supported base images.
	Generate an SBOM, scan dependencies and images, and block deployment on unresolved
	critical vulnerabilities unless a time-bound exception is approved.
* Emit structured JSON logs with timestamps, severity, service, environment,
	trace identifiers, and stable event names. Redact secrets and restricted data;
	use metrics and traces for values that do not belong in logs.
* Provide separate liveness and readiness endpoints, defaulting to `/healthz/live`
	and `/healthz/ready`. Keep responses free of secrets and dependency details.

### Deployment defaults

* Prefer Terraform or OpenTofu for cloud-neutral infrastructure as code. Use a
	cloud-native framework when it materially improves support for the chosen cloud
	and the organization has standardized on it.
* Store infrastructure state in an encrypted remote backend with versioning,
	locking, restricted access, and recovery procedures. Never commit state files.
* Prefer GitHub Actions when the repository is hosted on GitHub. Pin third-party
	actions to immutable commit hashes and use reusable workflows for shared policy.
* Deploy only through approved landing zones, subscriptions, accounts, projects,
	regions, and organizational units. Treat policy-as-code controls as mandatory.
* Tag every resource with `application`, `environment`, `owner`, `costCenter`,
	`dataClassification`, and `managedBy`. Extend the schema when organizational
	policy requires additional ownership or compliance metadata.
* Prefer private connectivity for databases, secret stores, and internal services.
	Manage DNS and network rules through infrastructure as code and document required
	peering and egress paths.
* Use workload identity federation and short-lived credentials in CI/CD. Do not
	store long-lived cloud credentials as pipeline secrets.
* Run formatting, validation, policy, security, and cost checks on every
	infrastructure change. Prefer Checkov for cross-platform policy scanning and
	add framework-native tools such as `terraform validate` and `tflint`.
* Publish packages and images only to an approved private registry. Enable
	immutability, vulnerability scanning, retention rules, provenance, and signing
	for release artifacts.
* Promote the same immutable artifact through development, test, staging, and
	production. Require automated checks before promotion and explicit approval for
	production, with rollback or roll-forward procedures tested in advance.

## Output comparison

| Generic agent | HVE agents | HVE agents with CALM skill |
| --- | --- | --- |
| **Style definition:** Uses general-purpose defaults and adapts to the immediate prompt. | **Style definition:** Follows HVE-specific practices and delivery conventions. | **Style definition:** Follows HVE-specific practices while applying CALM principles to remain composed, respectful, informed, and well documented. |