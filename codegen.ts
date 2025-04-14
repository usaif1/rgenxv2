import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: {
    // Add headers to the schema URL for authentication
    "https://axowbduxtchcdtanreum.supabase.co/graphql/v1": {
      headers: {
        apiKey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4b3diZHV4dGNoY2R0YW5yZXVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1Nzc0ODcsImV4cCI6MjA2MDE1MzQ4N30.9H6crv4_N25KhyNoMkSeRZTbZ2r_eMygDGg1J_e3ocg", // Add your Supabase API key here
      },
    },
  },
  documents: ["src/modules/**/graphql/*.graphql"],
  generates: {
    "sdk.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-generic-sdk",
      ],
    },
  },
};

export default config;
