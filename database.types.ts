export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      doctors: {
        Row: {
          created_at: string
          email_id: string | null
          first_name: string | null
          id: string
          last_name: string | null
          password_hash: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email_id?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          password_hash?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email_id?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          password_hash?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      family_history: {
        Row: {
          created_at: string
          father_age: number | null
          id: string
          is_father_disease: boolean | null
          is_mother_disease: boolean | null
          misc_info: string | null
          mother_age: number | null
          mother_age_conception: number | null
          patient_birth_weight: number | null
          patient_id: string | null
          week_of_complete_gestation: number | null
        }
        Insert: {
          created_at?: string
          father_age?: number | null
          id?: string
          is_father_disease?: boolean | null
          is_mother_disease?: boolean | null
          misc_info?: string | null
          mother_age?: number | null
          mother_age_conception?: number | null
          patient_birth_weight?: number | null
          patient_id?: string | null
          week_of_complete_gestation?: number | null
        }
        Update: {
          created_at?: string
          father_age?: number | null
          id?: string
          is_father_disease?: boolean | null
          is_mother_disease?: boolean | null
          misc_info?: string | null
          mother_age?: number | null
          mother_age_conception?: number | null
          patient_birth_weight?: number | null
          patient_id?: string | null
          week_of_complete_gestation?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "family_history_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      patients: {
        Row: {
          created_at: string
          dob: string | null
          email: string | null
          first_name: string | null
          gender: string | null
          height: number | null
          id: string
          last_name: string | null
          phone_number: string | null
          sample_collection_date: string | null
          sample_receive_date: string | null
          weight: number | null
        }
        Insert: {
          created_at?: string
          dob?: string | null
          email?: string | null
          first_name?: string | null
          gender?: string | null
          height?: number | null
          id?: string
          last_name?: string | null
          phone_number?: string | null
          sample_collection_date?: string | null
          sample_receive_date?: string | null
          weight?: number | null
        }
        Update: {
          created_at?: string
          dob?: string | null
          email?: string | null
          first_name?: string | null
          gender?: string | null
          height?: number | null
          id?: string
          last_name?: string | null
          phone_number?: string | null
          sample_collection_date?: string | null
          sample_receive_date?: string | null
          weight?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
