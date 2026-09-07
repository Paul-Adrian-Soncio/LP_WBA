import StatCounter from "./StatCounter";

export default function Stats() {
  return (
    <section className="bg-charcoal py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-12">
        <StatCounter count={90} label="Clients Helped in 2021" />
        <StatCounter count={28.5} prefix="$" suffix="M" decimal={1} label="Closed in Sales" />
        <StatCounter count={29} suffix="+" label="Years of Experience" />
      </div>
    </section>
  );
}
