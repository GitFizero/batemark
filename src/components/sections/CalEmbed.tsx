import { useEffect } from "react";
import { motion } from "framer-motion";

declare global {
  interface Window {
    Cal?: any;
  }
}

export const CalEmbed = () => {
  useEffect(() => {
    // Load Cal.com embed script
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            (api as any).q = (api as any).q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", "15min", { origin: "https://app.cal.com" });

    window.Cal.ns["15min"]("inline", {
      elementOrSelector: "#my-cal-inline-15min",
      config: { layout: "week_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "gaetan-batemark/15min",
    });

    window.Cal.ns["15min"]("ui", {
      cssVarsPerTheme: {
        light: { "cal-brand": "#292929" },
        dark: { "cal-brand": "#d0977b" },
      },
      hideEventTypeDetails: true,
      layout: "week_view",
    });
  }, []);

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Réservez votre <span className="text-gradient-copper">audit gratuit</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            15 minutes pour analyser votre situation et identifier les opportunités de croissance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div
            id="my-cal-inline-15min"
            className="w-full min-h-[600px] rounded-2xl overflow-hidden bg-card border border-border"
          />
        </motion.div>
      </div>
    </section>
  );
};
