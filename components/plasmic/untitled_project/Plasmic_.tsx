// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uTcrnc7q5a7Wq5VhDyH413
// Component: gP5bFeJxZjXz

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdTextArea } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdTextArea_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_css from "../antd_5/plasmic.module.css"; // plasmic-import: gWTKZskK7YvKMhWbWsE2e9/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: uTcrnc7q5a7Wq5VhDyH413/projectcss
import sty from "./Plasmic_.module.css"; // plasmic-import: gP5bFeJxZjXz/css

createPlasmicElementProxy;

export type Plasmic___VariantMembers = {};
export type Plasmic___VariantsArgs = {};
type VariantPropType = keyof Plasmic___VariantsArgs;
export const Plasmic___VariantProps = new Array<VariantPropType>();

export type Plasmic___ArgsType = {};
type ArgPropType = keyof Plasmic___ArgsType;
export const Plasmic___ArgProps = new Array<ArgPropType>();

export type Plasmic___OverridesType = {
  root?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  form?: Flex__<typeof FormWrapper>;
  input?: Flex__<typeof AntdInput>;
  textArea?: Flex__<typeof AntdTextArea>;
  button?: Flex__<typeof AntdButton>;
};

export interface Default_Props {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic___RenderFunc(props: {
  variants: Plasmic___VariantsArgs;
  args: Plasmic___ArgsType;
  overrides: Plasmic___OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_css.plasmic_tokens,
            sty.root
          )}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__pUvcW
            )}
          >
            {"Hello world"}
          </div>
          <PlasmicImg__
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: "/plasmic/untitled_project/images/plasmicPngpng.webp",
              fullWidth: 483,
              fullHeight: 476,
              aspectRatio: undefined
            }}
          />

          {(() => {
            const child$Props = {
              className: classNames("__wab_instance", sty.form),
              extendedOnValuesChange:
                generateStateOnChangePropForCodeComponents(
                  $state,
                  "value",
                  ["form", "value"],
                  FormWrapper_Helpers
                ),
              formItems: undefined,
              labelCol: { span: 8, horizontalOnly: true },
              layout: "vertical",
              mode: undefined,
              onIsSubmittingChange: generateStateOnChangePropForCodeComponents(
                $state,
                "isSubmitting",
                ["form", "isSubmitting"],
                FormWrapper_Helpers
              ),
              ref: ref => {
                $refs["form"] = ref;
              },
              wrapperCol: { span: 16, horizontalOnly: true }
            };
            initializeCodeComponentStates(
              $state,
              [
                {
                  name: "value",
                  plasmicStateName: "form.value"
                },
                {
                  name: "isSubmitting",
                  plasmicStateName: "form.isSubmitting"
                }
              ],
              [],
              FormWrapper_Helpers ?? {},
              child$Props
            );

            return (
              <FormWrapper
                data-plasmic-name={"form"}
                data-plasmic-override={overrides.form}
                {...child$Props}
              >
                <FormItemWrapper
                  className={classNames("__wab_instance", sty.formField__ezT3Y)}
                  label={"Name"}
                  name={"name"}
                >
                  <AntdInput
                    className={classNames("__wab_instance", sty.input)}
                  />
                </FormItemWrapper>
                <FormItemWrapper
                  className={classNames("__wab_instance", sty.formField__eiRm1)}
                  label={"Message"}
                  name={"message"}
                >
                  <AntdTextArea
                    className={classNames("__wab_instance", sty.textArea)}
                  />
                </FormItemWrapper>
                <AntdButton
                  className={classNames("__wab_instance", sty.button)}
                  submitsForm={true}
                  type={"primary"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__yZ8Ot
                    )}
                  >
                    {"Submit"}
                  </div>
                </AntdButton>
              </FormWrapper>
            );
          })()}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "form", "input", "textArea", "button"],
  img: ["img"],
  form: ["form", "input", "textArea", "button"],
  input: ["input"],
  textArea: ["textArea"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof PlasmicImg__;
  form: typeof FormWrapper;
  input: typeof AntdInput;
  textArea: typeof AntdTextArea;
  button: typeof AntdButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  Plasmic___OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic___VariantsArgs;
    args?: Plasmic___ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmic___VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      Plasmic___ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: Plasmic___ArgProps,
          internalVariantPropNames: Plasmic___VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic___RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic_";
  } else {
    func.displayName = `Plasmic_.${nodeName}`;
  }
  return func;
}

export const Plasmic_ = Object.assign(
  // Top-level Plasmic_ renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    form: makeNodeComponent("form"),
    input: makeNodeComponent("input"),
    textArea: makeNodeComponent("textArea"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for Plasmic_
    internalVariantProps: Plasmic___VariantProps,
    internalArgProps: Plasmic___ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default Plasmic_;
/* prettier-ignore-end */
