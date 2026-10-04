import styled, { createGlobalStyle, css, keyframes } from "styled-components";

export const color = {
  canvas: "#faf6f0",
  surface: "#ffffff",
  border: "#e8dfd3",
  chipBorder: "#d9c8b7",
  primary: "#6f4e37",
  latte: "#c8a98b",
  text: "#3b2a20",
  muted: "#8a7766",
  accent: "#e8883a",
  error: "#d9534f",
  badge: "#f1e6db",
  favorite: "#fff3e8",
  emptyBg: "#fff9f3",
  errorBg: "#fff0ef",
  errorBorder: "#f4c8c6",
  errorMark: "#ffe0de",
  skeleton: "#eee6dd",
  skeletonLight: "#f7f1ea",
} as const;

const shadow = {
  card: "0 6px 20px rgba(111, 78, 55, 0.06)",
  hover: "0 12px 28px rgba(111, 78, 55, 0.14)",
  panel: "0 8px 32px rgba(59, 42, 32, 0.07)",
} as const;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Pretendard, "Noto Sans KR", system-ui, sans-serif;
    color: ${color.text};
    background: ${color.canvas};
    font-synthesis: none;
  }

  * { box-sizing: border-box; }
  body { margin: 0; min-width: 320px; }
  button, input, select, textarea { font: inherit; color: inherit; }
  button { cursor: pointer; }
  button:disabled { cursor: not-allowed; }
`;

export const Icon = styled.img<{ $size: number; $spin?: boolean }>`
  display: block;
  flex-shrink: 0;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  ${({ $spin }) =>
    $spin &&
    css`
      animation: ${spin} 1s linear infinite;
    `}
`;

export const Page = styled.div`
  min-height: 100vh;
  background: ${color.canvas};
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 44px 56px 32px;

  @media (max-width: 768px) {
    padding: 28px 16px 24px;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const BrandMark = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: ${color.primary};
`;

export const ServiceName = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
`;

export const SearchBar = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 56px;
  padding: 0 20px;
  border: 1px solid ${color.border};
  border-radius: 999px;
  background: ${color.surface};

  &:focus-within {
    border-color: ${color.primary};
    box-shadow:
      0 0 0 1px ${color.primary},
      ${shadow.card};
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;

  &::placeholder {
    color: ${color.muted};
  }
`;

export const RegionFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

export const FilterLabel = styled.span`
  font-size: 13px;
  font-weight: 600;
`;

export const FilterChip = styled.button<{ $selected: boolean }>`
  padding: 10px 18px;
  border: 1px solid
    ${({ $selected }) => ($selected ? color.primary : color.chipBorder)};
  border-radius: 999px;
  background: ${({ $selected }) => ($selected ? color.primary : color.surface)};
  color: ${({ $selected }) => ($selected ? color.surface : color.primary)};
  font-size: 13px;
  font-weight: 500;
  line-height: 1.2;
  transition: background 0.15s ease;

  &:hover {
    border-color: ${color.primary};
  }
`;

/* ---------- 본문 레이아웃 ---------- */

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 56px 64px;

  @media (max-width: 768px) {
    padding: 0 16px 48px;
  }
`;

export const ContentHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`;

export const HeadingGroup = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

export const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  font-size: 22px;
  font-weight: 700;
`;

export const HeadingMeta = styled.span<{ $accent?: boolean }>`
  color: ${({ $accent }) => ($accent ? color.accent : color.muted)};
  font-size: 13px;
  font-weight: ${({ $accent }) => ($accent ? 500 : 400)};
`;

export const LoadingMark = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 999px;
  background: ${color.badge};
`;

export const SortGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${color.muted};
  font-size: 13px;
`;

export const SortButton = styled.button<{ $active: boolean }>`
  padding: 0;
  border: none;
  background: none;
  color: ${({ $active }) => ($active ? color.text : color.muted)};
  font-size: 13px;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 32px;
  align-items: start;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

export const CardArea = styled.section<{ $dimmed: boolean }>`
  min-width: 0;
  opacity: ${({ $dimmed }) => ($dimmed ? 0.9 : 1)};
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Aside = styled.aside<{ $dimmed: boolean }>`
  position: sticky;
  top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  opacity: ${({ $dimmed }) => ($dimmed ? 0.92 : 1)};

  @media (max-width: 1080px) {
    position: static;
  }
`;

export const AsideNote = styled.p`
  margin: 0;
  color: ${color.muted};
  font-size: 12px;
  text-align: center;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 0;
  height: 292px;
  padding: 20px;
  border: 1px solid ${color.border};
  border-radius: 16px;
  background: ${color.surface};
  box-shadow: ${shadow.card};
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  /* Figma CafeCard/Hover */
  &:hover {
    border-color: ${color.latte};
    box-shadow: ${shadow.hover};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 0;
`;

export const CardTitle = styled.h3`
  margin: 0;
  overflow: hidden;
  font-size: 18px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Metadata = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RegionBadge = styled.span`
  padding: 4px 9px;
  border-radius: 999px;
  background: ${color.badge};
  color: ${color.primary};
  font-size: 12px;
  font-weight: 500;
`;

export const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 600;
`;

export const FavoriteButton = styled.button<{ $active: boolean }>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: none;
  border-radius: 999px;
  background: ${({ $active }) => ($active ? color.favorite : color.canvas)};
`;

export const Address = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  color: ${color.muted};
  font-size: 13px;
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Tag = styled.li`
  padding: 5px 9px;
  border-radius: 999px;
  background: ${color.canvas};
  color: ${color.muted};
  font-size: 12px;
  font-weight: 500;
`;

export const Description = styled.p`
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  font-size: 14px;
  line-height: 1.45;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${color.muted};
`;

export const FooterMark = styled.span`
  font-size: 11px;
`;

export const DeleteButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  color: ${color.muted};
  font-size: 12px;
  font-weight: 500;

  &:hover:not(:disabled) {
    color: ${color.error};
  }
`;

export const SkeletonCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 0;
  height: 292px;
  padding: 20px;
  border: 1px solid ${color.border};
  border-radius: 16px;
  background: ${color.surface};
`;

export const SkeletonRow = styled.div<{
  $gap: number;
  $column?: boolean;
  $spread?: boolean;
}>`
  display: flex;
  flex-direction: ${({ $column }) => ($column ? "column" : "row")};
  align-items: ${({ $column }) => ($column ? "flex-start" : "center")};
  justify-content: ${({ $spread }) => ($spread ? "space-between" : "flex-start")};
  gap: ${({ $gap }) => $gap}px;
`;

export const SkeletonBlock = styled.div<{
  $width: string;
  $height: number;
  $light?: boolean;
  $pill?: boolean;
}>`
  width: ${({ $width }) => $width};
  max-width: 100%;
  height: ${({ $height }) => $height}px;
  border-radius: ${({ $pill }) => ($pill ? "999px" : "8px")};
  background: ${({ $light }) => ($light ? color.skeletonLight : color.skeleton)};
`;

export const EmptyPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: 330px;
  padding: 24px;
  border: 1px solid ${color.border};
  border-radius: 20px;
  background: ${color.emptyBg};
  text-align: center;
`;

export const EmptyCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const EmptyTitle = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: 700;
`;

export const EmptyDescription = styled.p`
  margin: 0;
  color: ${color.muted};
  font-size: 14px;
`;

export const ResetButton = styled.button`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 10px 16px;
  border: 1px solid ${color.chipBorder};
  border-radius: 999px;
  background: ${color.surface};
  color: ${color.primary};
  font-size: 13px;
  font-weight: 600;
`;

export const ErrorBanner = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 64px;
  padding: 14px 20px;
  border: 1px solid ${color.errorBorder};
  border-radius: 12px;
  background: ${color.errorBg};
`;

export const WarningMark = styled.span`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  background: ${color.errorMark};
`;

export const ErrorMessage = styled.p`
  flex: 1;
  margin: 0;
  color: ${color.error};
  font-size: 14px;
  font-weight: 500;
`;

export const CloseButton = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  border-radius: 999px;
  background: none;

  &:hover {
    background: ${color.errorMark};
  }
`;

export const FormPanel = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 20px;
  border: 1px solid ${color.border};
  border-radius: 20px;
  background: ${color.surface};
  box-shadow: ${shadow.panel};
`;

export const FormHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FormTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0;
  font-size: 18px;
  font-weight: 700;
`;

export const FormDescription = styled.p`
  margin: 0;
  color: ${color.muted};
  font-size: 13px;
  line-height: 1.45;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FieldLabel = styled.label`
  font-size: 13px;
  font-weight: 600;
`;

export const FieldControl = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  & > img {
    position: absolute;
    right: 14px;
    pointer-events: none;
  }
`;

const fieldBase = css<{ $invalid?: boolean }>`
  width: 100%;
  min-width: 0;
  padding: 0 14px;
  border: 1px solid ${color.border};
  border-radius: 12px;
  background: ${color.surface};
  color: ${color.text};
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: ${color.muted};
  }

  &:focus {
    border-color: ${color.primary};
    box-shadow: 0 0 0 1px ${color.primary};
  }

  ${({ $invalid }) =>
    $invalid &&
    css`
      &,
      &:focus {
        border-color: ${color.error};
        box-shadow: 0 0 0 1px ${color.error};
      }
    `}
`;

export const TextInput = styled.input<{ $invalid?: boolean }>`
  ${fieldBase}
  height: 48px;
`;

export const Select = styled.select<{ $invalid?: boolean; $empty: boolean }>`
  ${fieldBase}
  height: 48px;
  padding-right: 40px;
  appearance: none;
  color: ${({ $empty }) => ($empty ? color.muted : color.text)};
  cursor: pointer;

  option {
    color: ${color.text};
  }
`;

export const Textarea = styled.textarea<{ $invalid?: boolean }>`
  ${fieldBase}
  height: 92px;
  padding: 13px 14px;
  line-height: 1.45;
  resize: none;
`;

export const FieldError = styled.p`
  margin: 0;
  color: ${color.error};
  font-size: 12px;
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  height: 52px;
  border: none;
  border-radius: 12px;
  background: ${color.primary};
  color: ${color.surface};
  font-size: 14px;
  font-weight: 600;

  &:disabled {
    background: ${color.latte};
  }
`;

export const FormFootnote = styled.p`
  margin: 0;
  color: ${color.muted};
  font-size: 11px;
  text-align: center;
`;