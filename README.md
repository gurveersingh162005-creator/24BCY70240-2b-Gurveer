# 🛍️ Dynamic Product Filter

**Next.js • React • TypeScript • Tailwind • Shadcn UI**

A modern web application that allows users to filter and sort products dynamically using dropdown controls. This project demonstrates React state management, reusable components, array filtering, sorting, and responsive UI design.

---

## 🌐 Features

- ✅ Filter products by category
- 📊 Sort products by price (Low → High / High → Low)
- 📱 Responsive product cards
- ✨ Smooth hover animations
- ⚡ Instant UI updates using React state

---

## 🎯 Project Aim

To build a dynamic product filter that demonstrates:

- React state management  
- Controlled components  
- Reusable UI components  
- Array filtering & sorting  
- Responsive Tailwind layouts  

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [pnpm](https://pnpm.io/)

---

## 🚀 Getting Started

### Install dependencies

```bash
pnpm install
```

### Start development server

```bash
pnpm dev
```

### Open in browser

```
http://localhost:3000
```

---

## 📂 Project Structure

```
app/
  ├── layout.tsx
  ├── page.tsx
  └── globals.css

components/ui/
  └── (Shadcn UI components)

types/
  └── index.ts
```

---

## 🧠 Application Architecture

```
page.tsx → manages state and logic
    ↓
SelectControl → renders dropdowns
    ↓
ProductCard → renders products
```

### Data Flow

```
User → Dropdown → State Update → Filter/Sort → UI Re-render
```

---

## 📝 Code Explanation

### 1️⃣ TypeScript Data Models

**File:** `types/index.ts`

```typescript
export type SelectOption = {
  value: string
  label: string
}

export type Product = {
  id: number
  name: string
  price: number
  category: "electronics" | "clothing"
}
...
**Why TypeScript?**
- ✅ Prevents invalid data
- ✅ Provides autocomplete
- ✅ Improves reliability

---

### 2️⃣ Reusable Dropdown Component

**File:** `components/select-control.tsx`

```typescript
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SelectOption } from "@/types"

type SelectControlProps = {
  label: string
  options: SelectOption[]
  value: string
  onValueChange: (value: string) => void
}

export function SelectControl({
  label,
  options,
  value,
  onValueChange,
}: SelectControlProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">{label}</label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
  {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
```

**Key Concept: Controlled Component**

Flow:
```
User selects option → onValueChange() → Parent state updates → React re-renders UI
```

This pattern is called **Lifting State Up**.

---

### 3️⃣ Product Card Component

**File:** `components/product-card.tsx`

```typescript
import { Product } from "@/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">${product.price}</p>
        <p className="text-sm text-muted-foreground capitalize">
          {product.category}
        </p>
</CardContent>
    </Card>
  )
}
```

**Cards include hover animation:**

```css
transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
```
**Hover Effect:**
- ⬆️ Card moves upward on hover
- 🌟 Shadow increases
- ⏱️ Smooth transition animation

This creates a modern **floating card UI**.

---

### 4️⃣ State Management

**File:** `app/page.tsx`

```typescript
const [filterCategory, setFilterCategory] = useState("all")
const [sortBy, setSortBy] = useState("default")
```

- `filterCategory` → controls filtering
- `sortBy` → controls sorting

---

### 🔍 Filtering Logic

```typescript
let visibleProducts = PRODUCTS.filter((p) =>
  filterCategory === "all" ? true : p.category === filterCategory
)
```

**Steps:**
1. Loop through products
2. If "All" selected → show all
3. Otherwise → match category

---

### 🔃 Sorting Logic

```typescript
if (sortBy === "low") {
  visibleProducts.sort((a, b) => a.price - b.price)
}
if (sortBy === "high") {
  visibleProducts.sort((a, b) => b.price - a.price)
}
```

- **Low → High:** `a.price - b.price`
- **High → Low:** `b.price - a.price`

---

### 📱 Responsive Layout

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  {visibleProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
```

- 📱 **Mobile** → 1 column
- 💻 **Desktop** → 2 columns

---

## 🔄 Application Flow

```
1. User selects category
   ↓
2. User selects sort option
   ↓
3. Products are filtered
   ↓
4. Products are sorted
   ↓
5. React updates UI automatically
```
---

## 🎓 Learning Outcomes

This project teaches:

- ⚛️ React component architecture
- 🎯 Props & state management
- 🎮 Controlled components
- 🔍 Array filtering & sorting
- 🎨 Tailwind responsive design
- 🚀 Next.js App Router basics

---

## 📸 Screenshots

> Add your application screenshots here

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
