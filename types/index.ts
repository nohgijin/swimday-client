export type StyleProps = {
  className?: string;
  style?: React.CSSProperties;
};

export type DefaultProps = {
  children?: React.ReactNode;
} & StyleProps;
