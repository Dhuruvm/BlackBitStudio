import StatsCounter from '../StatsCounter';

export default function StatsCounterExample() {
  const stats = [
    { label: "Servers", value: "1,000+" },
    { label: "Users", value: "500,000+" },
    { label: "Commands", value: "100+" },
    { label: "Uptime", value: "99.9%" },
  ];

  return <StatsCounter stats={stats} />;
}
