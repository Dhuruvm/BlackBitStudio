import FeatureCard from '../FeatureCard';

export default function FeatureCardExample() {
  return (
    <div className="p-8 grid gap-6">
      <FeatureCard
        icon="Shield"
        title="Advanced Moderation"
        description="Keep your server safe with powerful auto-moderation, warning systems, and logging capabilities."
      />
    </div>
  );
}
