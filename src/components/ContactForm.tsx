import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { industries } from "@/data/industries";

interface ContactFormProps {
  /** "light" (default) for a light-background container (e.g. the dedicated /contact page).
   * "dark" for a dark-background container (e.g. the homepage's dark CTA section). */
  variant?: "light" | "dark";
}

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "Enter your first name"),
  lastName: z.string().trim().min(1, "Enter your last name"),
  email: z.string().trim().email("Enter a valid email address"),
  company: z.string().trim().min(1, "Enter your company name"),
  phone: z.string().trim().optional(),
  industry: z.string().optional(),
  message: z.string().trim().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const CONTACT_EMAIL = "info@sentinel-technologies.net";

const ContactForm = ({ variant = "light" }: ContactFormProps) => {
  const isDark = variant === "dark";
  const labelClass = isDark ? "text-white/90" : undefined;
  const inputClass = isDark
    ? "bg-white/10 border-white/20 text-white placeholder:text-white/50"
    : undefined;
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      industry: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    const subject = encodeURIComponent(
      `Consultation request from ${values.firstName} ${values.lastName} (${values.company})`
    );
    const lines = [
      `Name: ${values.firstName} ${values.lastName}`,
      `Company: ${values.company}`,
      `Email: ${values.email}`,
      values.phone && `Phone: ${values.phone}`,
      values.industry && `Industry: ${values.industry}`,
      "",
      values.message || "",
    ].filter((line) => line !== undefined && line !== false);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    toast({
      title: "Opening your email app",
      description: "Your consultation request is ready to send to our team.",
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>First Name *</FormLabel>
                <FormControl>
                  <Input placeholder="John" className={inputClass} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>Last Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Smith" className={inputClass} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Email Address *</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="john@company.com"
                  className={inputClass}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>Company *</FormLabel>
                <FormControl>
                  <Input placeholder="Your company" className={inputClass} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+91 00000 00000" className={inputClass} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="industry"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Industry</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className={inputClass}>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry.slug} value={industry.name}>
                      {industry.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Tell Us About Your Security Needs</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="Tell us about your site, systems, or timeline..."
                  className={inputClass}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg rounded-lg shadow-security transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
        >
          Schedule Free Consultation
        </Button>

        <p className="text-sm opacity-75">
          Response within 24 hours &middot; Free security assessment &middot; No obligation
        </p>
      </form>
    </Form>
  );
};

export default ContactForm;
