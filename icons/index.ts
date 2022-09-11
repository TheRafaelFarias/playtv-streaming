export interface IconProp {
  isActive: boolean;
  size?: number;
}

export type SubIconProp = Pick<IconProp, "size">;
