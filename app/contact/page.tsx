"use client";
import Breadcrumb from "@/components/Breadcrumb";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";

interface IFormInput {
  name: string;
  email: string;
  phone: number;
  content: string;
}
export default function Contact({ postId }: any) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<IFormInput>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sucsess, setSucsess] = useState(false);
  const [fail, setFail] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      setIsSubmitting(true);
      const now = dayjs().format();
      await axios.post(`https://blogger-admin.onrender.com/api/contacts`, {
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          content: data.content,
          date: now,
        },
      });
      reset();
      setSucsess(true);
      setFail(false);
    } catch (error) {
      setFail(true);
      setSucsess(false);
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="contact-page">
      <Breadcrumb title="Liên hệ" />
      <div className="container mx-auto xl:max-w-[1200px] px-4 md:px-8">
        <div className="widget-content my-[30px] md:my-[60px]">
          <div className="max-w-[900px] mx-auto bg-white p-4 md:p-8 border rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Liên hệ hỗ trợ</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  placeholder="Họ và Tên"
                  className="w-full py-3 px-3 border rounded focus:outline-none focus:border-blue-500"
                  {...register("name", { required: "Vui lòng nhập họ và tên" })}
                />
                {errors.name && (
                  <p className="text-[red] text-[13px] font-medium pl-[2px]">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  placeholder="Email của bạn"
                  className="w-full py-3 px-3 border rounded focus:outline-none focus:border-blue-500"
                  {...register("email", {
                    required: "Vui lòng nhập email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-[red] text-[13px]  pl-[2px]">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="number"
                  id="phone"
                  placeholder="Số điện thoại"
                  className="w-full py-3 px-3 border rounded focus:outline-none focus:border-blue-500"
                  {...register("phone", {
                    required: "Vui lòng nhập số điện thoại",
                  })}
                />
                {errors.phone && (
                  <p className="text-[red] text-[13px]  pl-[2px]">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Nhập nội dung"
                  className="w-full py-3 px-3 border rounded focus:outline-none focus:border-blue-500"
                  {...register("content", {
                    required: "Vui lòng nhập nội dung",
                  })}
                ></textarea>
                {errors.content && (
                  <p className="text-[red] text-[13px] pl-[2px]">
                    {errors.content.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                {sucsess ? (
                  <p className="text-[red] text-[14px] pl-[2px]">
                    Gửi thông tin thành công
                  </p>
                ) : (
                  ""
                )}
                {fail ? (
                  <p className="text-[red] text-[14px] pl-[2px]">
                    Gửi thông tin thất bại
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full uppercase bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Gửi thông tin
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
