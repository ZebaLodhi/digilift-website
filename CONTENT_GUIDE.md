# Content Editing Guide

This guide shows non-technical users how to update website content without touching code.

## Editing Packages

**File**: `data/packages.json`

### To Update Pricing

Find the package you want to update and change the `price` field:

```json
"price": "$1,497"
```

### To Add/Remove Features

Edit the `features` array:

```json
"features": [
  "Google Business Profile optimization",
  "4-page website",
  "Your new feature here"
]
```

### To Change Package Name or Description

Update the `name`, `tagline`, or `description` fields:

```json
"name": "Starter",
"tagline": "Perfect for Getting Started",
"description": "Essential digital presence upgrade..."
```

## Editing FAQs

**File**: `data/faq.json`

### To Add a New FAQ

Add a new object to the array:

```json
{
  "question": "What is your refund policy?",
  "answer": "We offer a 30-day money-back guarantee..."
}
```

### To Remove an FAQ

Delete the entire question/answer object including the curly braces `{ }`.

### To Update an FAQ

Just edit the text in the `question` or `answer` field.

## Editing Testimonials

**File**: `data/testimonials.json`

### To Add a New Testimonial

```json
{
  "id": 6,
  "name": "John Smith",
  "role": "Director",
  "business": "ABC Daycare",
  "location": "Miami, FL",
  "image": "/testimonials/john.jpg",
  "rating": 5,
  "quote": "Working with DigiLift was amazing!",
  "results": "Doubled enrollment in 3 months"
}
```

**Note**: Make sure the `id` is unique (use the next number in sequence).

### To Update a Testimonial

Find the testimonial by name and edit any field.

### To Remove a Testimonial

Delete the entire testimonial object including the curly braces `{ }`.

## Important JSON Rules

1. **Commas**: Every item in a list needs a comma after it, EXCEPT the last one
2. **Quotes**: All text must be in double quotes `"like this"`
3. **Brackets**: Don't delete `[` or `]` - they mark the start/end of lists
4. **Braces**: Don't delete `{` or `}` - they contain each item

### Good Example:
```json
[
  {
    "name": "First Item",
    "value": "100"
  },
  {
    "name": "Second Item",
    "value": "200"
  }
]
```

### Bad Example (missing comma):
```json
[
  {
    "name": "First Item",
    "value": "100"
  }  <-- Missing comma here!
  {
    "name": "Second Item",
    "value": "200"
  }
]
```

## Testing Your Changes

After editing any JSON file:

1. Save the file
2. Refresh your browser
3. Check that the content updated correctly
4. If you see an error, check for missing commas or quotes

## Need Help?

If you break something:

1. Use Ctrl+Z (Windows) or Cmd+Z (Mac) to undo
2. Or compare your file to the examples in this guide
3. Common issues:
   - Missing comma between items
   - Missing quote around text
   - Extra comma after last item

## Updating Contact Information

**File**: `components/Footer.tsx`

Search for these lines and update:

```typescript
hello@digilift-daycare.com  // Your email
(555) 123-4567             // Your phone
```

**File**: `app/bookings/page.tsx`

Update the same contact info in the sidebar section.

## Updating Social Media Links

**File**: `components/Footer.tsx`

Find the social media section and update the `href` values:

```typescript
href="https://facebook.com/your-page"
href="https://instagram.com/your-account"
href="https://linkedin.com/company/your-company"
```

## Best Practices

1. **Always test** changes locally before deploying
2. **Keep backups** of JSON files before major edits
3. **Use a JSON validator** online if you're unsure (search "JSON validator")
4. **Make small changes** and test frequently
5. **Ask for help** if you're unsure about syntax

---

Remember: When in doubt, copy the exact format of an existing item!
