# Agent Mag

![Agent Mag](https://raw.githubusercontent.com/Agent-mag/.github/main/profile/agentmag-banner-github.png)

**Free, open-source tools, skills, and local model install commands for the AI builder community.**

We believe the best way to serve builders is to build for them in the open, with no strings attached.

[![Website](https://img.shields.io/badge/theagentmag.com-000?style=for-the-badge&logo=google-chrome&logoColor=white)](https://theagentmag.com)
[![npm](https://img.shields.io/npm/v/agentmag?style=for-the-badge&color=000&label=npm)](https://www.npmjs.com/package/agentmag)
[![X](https://img.shields.io/badge/@theagentmag-000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/theagentmag)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/company/theagentmag)
[![Newsletter](https://img.shields.io/badge/Newsletter-Subscribe_Free-000?style=for-the-badge&logo=substack&logoColor=white)](https://theagentmag.com/#newsletter)

---

## Quick Start

```bash
# Install an agent skill config bundle
npx agentmag add skill web-browsing

# Install a GitHub Actions workflow tool
npx agentmag add tool seo-geo-reviewer

# Pull a local Ollama model
npx agentmag add model qwen3.6

# Search the registry
npx agentmag search "database"
```

`agentmag add model <name>` wraps `ollama pull <name>`, so local models stay in your normal Ollama library.

---

## Our Repos

| Repo | What It Is | Install / Contribute |
|------|------------|----------------------|
| [`agentmag`](https://github.com/Agent-mag/agentmag) | Agent Mag website, model directory, skill registry, and npm CLI | `npx agentmag add skill\|tool\|model <name>` |
| [`skills`](https://github.com/Agent-mag/skills) | Open registry of installable agent skills: prompts, tools, manifests | `npx agentmag add skill <name>` |
| [`tools`](https://github.com/Agent-mag/tools) | Free tools for agent builders: GitHub Actions, CLIs, utilities | `npx agentmag add tool <name>` |
| [`roadmap`](https://github.com/Agent-mag/roadmap) | Public roadmap, feature proposals, and RFCs | Propose via issue |
| [`.github`](https://github.com/Agent-mag/.github) | Org profile, community health files, templates | PRs welcome |

All open ecosystem repos are MIT-licensed. The Agent Mag platform at [theagentmag.com](https://theagentmag.com) is the product surface around the open registry.

---

## The Platform

### Deep-Dive Articles

Long-form technical content on agent architectures, production patterns, model benchmarks, and case studies.

**[Read articles](https://theagentmag.com)**

### AI Models Directory

Search OpenRouter API models and local Ollama models by context, modality, pricing, tags, and install commands.

**[Browse models](https://theagentmag.com/models)**

### Open Skills Registry

Installable agent skills you can drop into coding agents as config bundles: prompts, tool definitions, manifests, and templates.

**[Explore skills](https://theagentmag.com/skills)**

### Free Tools Directory

Frameworks, SDKs, testing utilities, observability platforms, and workflow tools for AI agent builders.

**[Browse tools](https://theagentmag.com/tools)**

### Curated Job Board

AI agent engineering roles from companies building agents in production.

**[View jobs](https://theagentmag.com/jobs)**

### Events And Resources

Conferences, hackathons, tutorials, research papers, and learning paths for going deeper on agent systems.

**[See events](https://theagentmag.com/events)** | **[Find resources](https://theagentmag.com/resources)**

---

## What We're Building Next

| Area | What to Expect | Status |
|------|----------------|--------|
| **Agent Testing** | Evaluation harnesses, conversation replay, assertion libraries | In progress |
| **Prompt Engineering** | Prompt linters, version control, A/B testing utilities | In progress |
| **Local Models** | Better Ollama discovery, install stats, and agent runtime examples | In progress |
| **Observability** | Trace viewers, cost trackers, latency profilers | Planned |
| **MCP & Tool Use** | MCP servers, tool schema validators, and registry metadata | Planned |
| **Deployment** | Dockerfiles, CI/CD templates, infra-as-code | Planned |

Have a tool, skill, or model workflow you want us to support? [Open a discussion](https://github.com/orgs/Agent-mag/discussions).

---

## Contributing

| What You Want to Do | Where |
|---------------------|-------|
| Submit a new agent skill | PR to [`Agent-mag/skills`](https://github.com/Agent-mag/skills) |
| Submit a new tool | PR to [`Agent-mag/tools`](https://github.com/Agent-mag/tools) |
| Improve the CLI or model directory | PR to [`Agent-mag/agentmag`](https://github.com/Agent-mag/agentmag) |
| Propose a feature | Issue on [`Agent-mag/roadmap`](https://github.com/Agent-mag/roadmap) |
| Report a bug | Issue in the relevant repo |
| Write an article | Pitch at [editorial@theagentmag.com](mailto:editorial@theagentmag.com) |

---

## Tech Stack

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Azure](https://img.shields.io/badge/Azure-0078D4?style=flat-square&logo=microsoft-azure&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white)
![Anthropic](https://img.shields.io/badge/Anthropic-191919?style=flat-square&logo=anthropic&logoColor=white)

---

**Est. 2026** | San Francisco | [theagentmag.com](https://theagentmag.com)

Built for builders, by builders.
