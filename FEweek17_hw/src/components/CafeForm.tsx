import { useState, type SubmitEvent } from "react";
import chevronIcon from "../assets/icons/chevron-down.svg";
import loaderIcon from "../assets/icons/loader-white.svg";
import plusIcon from "../assets/icons/plus.svg";
import sparklesIcon from "../assets/icons/sparkles.svg";
import starIcon from "../assets/icons/star-outline.svg";
import * as S from "../styles/styled";
import { REGIONS } from "../types/cafe";
import type { CafeFormValues } from "../types/cafe";
import { isRegion, parseTags } from "../utils/cafeFilters";

interface CafeFormProps {
  disabled: boolean;
  onSubmit: (values: CafeFormValues) => Promise<boolean>;
}

// 폼 입력값은 전부 문자열로 관리
type FormFields = Record<keyof CafeFormValues, string>;
// 에러는 일부 필드에만 생기므로 Partial
type FormErrors = Partial<Record<keyof CafeFormValues, string>>;

const INITIAL_FIELDS: FormFields = {
  name: "",
  region: "",
  address: "",
  tags: "",
  rating: "",
  description: "",
};

const RATING_OPTIONS = [5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1];
const REQUIRED_MESSAGE = "필수 항목을 입력해주세요.";

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!fields.name.trim()) errors.name = REQUIRED_MESSAGE;
  if (!isRegion(fields.region)) errors.region = REQUIRED_MESSAGE;
  if (!fields.address.trim()) errors.address = REQUIRED_MESSAGE;
  if (!fields.rating) errors.rating = REQUIRED_MESSAGE;
  if (!fields.description.trim()) errors.description = REQUIRED_MESSAGE;
  return errors;
}

export default function CafeForm({ disabled, onSubmit }: CafeFormProps) {
  const [fields, setFields] = useState<FormFields>(INITIAL_FIELDS);
  const [errors, setErrors] = useState<FormErrors>({});

  function handleChange(name: keyof FormFields, value: string) {
    setFields((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0 || !isRegion(fields.region)) return;

    const saved = await onSubmit({
      name: fields.name.trim(),
      region: fields.region,
      address: fields.address.trim(),
      tags: parseTags(fields.tags),
      rating: Number(fields.rating),
      description: fields.description.trim(),
    });

    if (saved) {
      setFields(INITIAL_FIELDS);
    }
  }

  return (
    <S.FormPanel onSubmit={handleSubmit} noValidate>
      <S.FormHeading>
        <S.FormTitle>
          <S.Icon src={sparklesIcon} alt="" $size={20} />
          나만의 카페 등록하기
        </S.FormTitle>
        <S.FormDescription>
          좋았던 서울의 카페를 한 곳씩 도감에 채워보세요.
        </S.FormDescription>
      </S.FormHeading>

      <S.Field>
        <S.FieldLabel htmlFor="cafe-name">카페 이름</S.FieldLabel>
        <S.TextInput
          id="cafe-name"
          value={fields.name}
          onChange={(event) => handleChange("name", event.target.value)}
          placeholder="카페 이름을 입력하세요"
          $invalid={Boolean(errors.name)}
        />
        {errors.name && <S.FieldError>{errors.name}</S.FieldError>}
      </S.Field>

      <S.Field>
        <S.FieldLabel htmlFor="cafe-region">지역</S.FieldLabel>
        <S.FieldControl>
          <S.Select
            id="cafe-region"
            value={fields.region}
            onChange={(event) => handleChange("region", event.target.value)}
            $empty={fields.region === ""}
            $invalid={Boolean(errors.region)}
          >
            <option value="" disabled>
              지역을 선택하세요
            </option>
            {REGIONS.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </S.Select>
          <S.Icon src={chevronIcon} alt="" $size={17} />
        </S.FieldControl>
        {errors.region && <S.FieldError>{errors.region}</S.FieldError>}
      </S.Field>

      <S.Field>
        <S.FieldLabel htmlFor="cafe-address">주소</S.FieldLabel>
        <S.TextInput
          id="cafe-address"
          value={fields.address}
          onChange={(event) => handleChange("address", event.target.value)}
          placeholder="도로명 주소를 입력하세요"
          $invalid={Boolean(errors.address)}
        />
        {errors.address && <S.FieldError>{errors.address}</S.FieldError>}
      </S.Field>

      <S.Field>
        <S.FieldLabel htmlFor="cafe-tags">태그</S.FieldLabel>
        <S.TextInput
          id="cafe-tags"
          value={fields.tags}
          onChange={(event) => handleChange("tags", event.target.value)}
          placeholder="예: 조용한, 디저트, 햇살맛집"
        />
      </S.Field>

      <S.Field>
        <S.FieldLabel htmlFor="cafe-rating">별점 (1–5)</S.FieldLabel>
        <S.FieldControl>
          <S.Select
            id="cafe-rating"
            value={fields.rating}
            onChange={(event) => handleChange("rating", event.target.value)}
            $empty={fields.rating === ""}
            $invalid={Boolean(errors.rating)}
          >
            <option value="" disabled>
              별점을 선택하세요
            </option>
            {RATING_OPTIONS.map((rating) => (
              <option key={rating} value={rating}>
                {rating.toFixed(1)}점
              </option>
            ))}
          </S.Select>
          <S.Icon src={starIcon} alt="" $size={17} />
        </S.FieldControl>
        {errors.rating && <S.FieldError>{errors.rating}</S.FieldError>}
      </S.Field>

      <S.Field>
        <S.FieldLabel htmlFor="cafe-description">한 줄 설명</S.FieldLabel>
        <S.Textarea
          id="cafe-description"
          value={fields.description}
          onChange={(event) => handleChange("description", event.target.value)}
          placeholder="이 카페를 추천하는 이유를 적어주세요"
          $invalid={Boolean(errors.description)}
        />
        {errors.description && <S.FieldError>{errors.description}</S.FieldError>}
      </S.Field>

      <S.PrimaryButton type="submit" disabled={disabled}>
        <S.Icon src={disabled ? loaderIcon : plusIcon} alt="" $size={17} $spin={disabled} />
        {disabled ? "등록 중..." : "등록"}
      </S.PrimaryButton>

      <S.FormFootnote>작성한 기록은 나의 카페 노트에 안전하게 저장돼요.</S.FormFootnote>
    </S.FormPanel>
  );
}