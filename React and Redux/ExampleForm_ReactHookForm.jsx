import React, { useState, useEffect, useRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import styled from "styled-components";
import { TextField, Button, CircularProgress } from "@material-ui/core";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Login = (props) => {
  // CONSTANTs
  const personalDetails = [
    {
      displayName: "Name",
      keyId: "name",
      required: { value: true, message: "Required" },
    },
    {
      displayName: "Email",
      keyId: "email",
      required: { value: true, message: "Required" },
      pattern: { value: EMAIL_REGEX, message: "Invalid Email" },
    },
  ];

  const workExperiences = [
    {
      displayName: "Company Name",
      keyId: "companyName",
      required: { value: true, message: "Required" },
    },
    {
      displayName: "Years",
      keyId: "years",
      required: { value: true, message: "Required" },
    },
  ];

  const skills = [
    {
      displayName: "Frontend",
      keyId: "frontend",
      required: { value: true, message: "Required" },
    },
    {
      displayName: "Backend",
      keyId: "backend",
      required: { value: true, message: "Required" },
    },
  ];

  // REFS HERE
  const resetRef = useRef(null);

  // HOOKS HERE
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
    control,
    watch,
  } = useForm({
    mode: "all",
    defaultValues: {
      workExperiences: [{}],
    },
  });
  const { fields, append } = useFieldArray({
    control,
    name: "workExperiences",
  });
  const watchAllFields = watch();
  const watchWorkExperiences = watch("workExperiences");
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchWorkExperiences[index],
    };
  });

  useEffect(() => {
    console.log(`watchAllFields: `, watchAllFields);
  }, [watchAllFields]);

  // FUNCTIONs HERE
  const resetForm = () => {
    reset();
    resetRef?.current?.click();
  };

  const handleSubmitForm = () => {
    console.log(`Values: `, getValues());
    resetForm();
    window.alert("Submitted");
  };

  // STYLES HERE (SHOULD BE IN SEPARATE FILE)
  const styles = {
    mainCnt: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
    section: {
      border: "1px solid lightgrey",
      padding: 10,
      marginTop: 20,
    },
    sectionHeader: {
      fontWeight: "bold",
      paddingBottom: 20,
    },
    submitBtn: {
      marginTop: 20,
    },
    inputTextField: {
      marginBottom: 5,
    },
  };

  return (
    <section style={styles.mainCnt}>
      <form onSubmit={handleSubmit(handleSubmitForm)} style={styles.form}>
        <section style={styles.section}>
          <div style={styles.sectionHeader}>Personal Details</div>
          {personalDetails?.map(({ displayName, keyId, required, pattern }) => {
            return (
              <ThemeTextField
                key={keyId}
                id={keyId}
                name={keyId}
                customlabel={displayName}
                {...register(`personalDetails.${keyId}`, {
                  required,
                  pattern,
                })}
                error={!!errors?.personalDetails?.[keyId]}
                className={styles.inputTextField}
                helperText={errors?.personalDetails?.[keyId]?.message}
                ishelpertext="true"
              />
            );
          })}
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>Work Experiences</div>
          {controlledFields.map((field, index) => {
            return (
              <section key={index}>
                {workExperiences?.map(({ displayName, keyId, required, pattern }) => {
                  return (
                    <ThemeTextField
                      key={keyId}
                      id={keyId}
                      name={keyId}
                      customlabel={displayName}
                      {...register(`workExperiences.${index}.${keyId}`, {
                        required,
                        pattern,
                      })}
                      error={!!errors?.workExperiences?.[index]?.[keyId]}
                      className={styles.inputTextField}
                      helperText={errors?.workExperiences?.[index]?.[keyId]?.message}
                      ishelpertext="true"
                    />
                  );
                })}
              </section>
            );
          })}
          <ThemeButton type="button" onClick={() => append({})}>
            Add
          </ThemeButton>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>Skills</div>
          <ThemeTextField
            key="frontend"
            id="frontend"
            name="frontend"
            customlabel="Frontend"
            {...register(`skills.frontend`, {
              required: { value: true, message: "Required" },
            })}
            error={!!errors?.skills?.frontend}
            className={styles.inputTextField}
            helperText={errors?.skills?.frontend?.message}
            ishelpertext="true"
          />

          <ThemeTextField
            key="backend"
            id="backend"
            name="backend"
            customlabel="Backend"
            {...register(`skills.backend`, {
              required: { value: true, message: "Required" },
            })}
            error={!!errors?.skills?.backend}
            className={styles.inputTextField}
            helperText={errors?.skills?.backend?.message}
            ishelpertext="true"
          />
        </section>

        <input type="reset" ref={resetRef} style={{ display: "none" }} />

        <ThemeButton type="submit" style={styles.submitBtn}>
          Submit
        </ThemeButton>
      </form>
    </section>
  );
};

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

// Following should be in separate file

/* *********************************************************
 * TextField
 * *********************************************************
 */
const ThemeTextField = styled(
  React.forwardRef((props, ref) => (
    <>
      {props?.customlabel && (
        <label
          style={{
            marginBottom: 5,
          }}
        >
          {props?.customlabel}
        </label>
      )}
      <TextField ref={ref} variant="outlined" size="small" {...props} />
    </>
  ))
)({
  // .MuiTextField-root
  width: ({ customStyle, ...props }) => customStyle?.width || "100%",
  maxWidth: ({ customStyle, ...props }) => customStyle?.maxWidth || "100%",
  minHeight: ({ customStyle, ...props }) => props?.ishelpertext && (customStyle?.minHeight || "60px"),

  ".MuiOutlinedInput-root": {
    fontSize: "0.9em",
    backgroundColor: ({ customStyle, ...props }) =>
      props?.disabled
        ? customStyle?.disabledBgColor || "lightgrey"
        : customStyle?.backgroundColor || "rgba(178, 190, 181, 0.15)",
    borderRadius: ({ customStyle, ...props }) => customStyle?.borderRadius || "5px",
    color: ({ customStyle, ...props }) => customStyle?.color || "#000000",
    // INPUT
    input: {
      padding: ({ customStyle, ...props }) => customStyle?.padding || 8,
      "&::-webkit-calendar-picker-indicator": {
        outline: "none",
        border: "none",
      },
    },
    // FIELDSET
    fieldset: {
      borderWidth: 0,
      border: ({ customStyle, ...props }) =>
        props?.error ? "1px solid rgba(139, 0, 0, 1) !important" : customStyle?.border || "", // TODO: Use colors, border-radius, etc as a variable
    },
    "&:hover fieldset": {
      border: ({ customStyle, ...props }) =>
        props?.disabled ? "" : props?.error ? "1px solid rgba(139, 0, 0, 1)" : "1px solid lightgrey",
    },
    "&.Mui-focused fieldset": {
      border: ({ customStyle, ...props }) =>
        props?.disabled ? "" : props?.error ? "1px solid rgba(139, 0, 0, 1)" : "1px solid lightgrey",
    },
  },

  ".MuiFormHelperText-root": {
    margin: 0,
    fontSize: "0.7em",
    marginTop: 1,
    color: "grey",

    "&.Mui-error": {
      color: "rgba(139, 0, 0, 1)",
    },
  },

  ".MuiInputBase-input": {
    "&.Mui-disabled": {
      color: "#000000",
      opacity: 0.5,
    },
  },

  ".MuiInputBase-multiline": {
    padding: 8,
  },
});

/* *********************************************************
 * Button
 * *********************************************************
 */
export const ThemeButton = styled(
  React.forwardRef(({ customStyle, ...props }, ref) => (
    <>
      <Button
        ref={ref}
        variant="contained"
        color={props?.issecondary ? "secondary" : "primary"}
        disableTouchRipple
        {...props}
      >
        {props?.loader === "true" ? (
          <CircularProgress style={{ color: customStyle?.loaderColor || "#fff", width: "1.3em", height: "1.3em" }} />
        ) : (
          props?.children
        )}
      </Button>
    </>
  ))
)({
  width: ({ customStyle, ...props }) => customStyle?.width,
  boxShadow: "none",
  color: ({ customStyle, ...props }) => customStyle?.color,
});

export default Login;
