# AstralPalm – Palm Reading App

A premium AI-powered palm reading iOS app focused on self-discovery, wellness, and mystical insight.

---

## Product Overview

AstralPalm captures palm images, analyzes them using AI, and presents structured personality and life insights. The app is positioned around self-discovery, wellness, and the mystical experience, with a subscription-based monetization model.

---

## Target Users

- Wellness & self-discovery seekers
- Astrology & mysticism enthusiasts
- Curious Gen Z / Millennial users
- Users interested in personality insights and shareable experiences

---

## User Flow

```
Loading → Intro → Home → Palm Reader → Scan → Results → Records → Repeat Engagement
```

### Key Screens & States

| State | Flow |
|---|---|
| Non-subscribed | Palm Reader promo page → Paywall |
| Subscribed (first use) | Upload Left Hand → Results → Upload Right Hand (optional) → Results → Records |
| Subscribed (partial) | Records page → Left tab has results, Right tab is empty → CTA to scan right hand |
| Subscribed (completed) | Records page with both hands, tabs to view results, Repeat Scan available |

---

## Core Features

### Palm Scan & Upload
- On-screen overlay guide for hand positioning
- Instructions for lighting and background
- Image compression & upload
- Option to retry before submission

### Results Experience
Each results page includes:
- Key personality traits
- Emotional tendencies
- Relationship & love insights
- Career tendencies
- Summary insight
- Repeat Scan button

Loading screens use emotional anticipation messaging (e.g., *"Analyzing your life path…"*).

### Records & Repeat Engagement
- Locally stored left and right hand results
- Tab-based navigation between hands
- Empty state prompts for scan completion
- Repeat Scan button on both tabs

---

## Subscription & Monetization

- **Model:** Subscription access (via Apple ID / StoreKit)
- **Conversion strategy:**
  - Value-building promo page shown before paywall
  - Emphasis on deeper insight from scanning both hands
  - Premium positioning for advanced AI analysis
- **No account required** — subscription tied to Apple ID

---

## Data & Privacy

- No account or login required
- Subscription verified via Apple ID
- Results stored **locally on device**
- Users can delete their scans
- Images processed securely
- Clear user consent obtained before any upload

---

## Key UX Principles

1. Reduce friction while maintaining mystique
2. Build anticipation and emotional engagement
3. Provide autonomy and flexibility
4. Encourage completion without forcing it
5. Maintain trust through clear guidance

---

## Success Metrics

- Paywall conversion rate
- Completion rate (both hands scanned)
- Repeat scan rate
- Retention: Day 1 / Day 7
- Average session duration
- Share rate (future feature)

---

## Future Expansion

- Horoscope & astrology insights
- Compatibility readings
- Daily guidance
- Social sharing features
- Progress tracking & insight evolution

---

## Goals

- Validate user demand for palm reading insights
- Achieve strong conversion through value-driven paywall design
- Encourage completion of both hand scans
- Create repeat engagement via history and re-scan features
