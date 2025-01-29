export interface ToolbarHomeProps {
  onNewPresentation: () => void;
  onSearch: (value: string) => Promise<void>;
}
